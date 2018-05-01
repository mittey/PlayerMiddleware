import { GMP as gmp } from "../GMPlayer";
import { List } from "linqts";
import { deserialize } from 'json-typescript-mapper';
import { SearchRoot } from "../models/googleMusicModels/searchRoot";
import { Track } from "../models/googleMusicModels/track";
import { Entry } from "../models/googleMusicModels/entry";
import * as config from "config";
import axios from "axios";
import * as FormData from "form-data";
import { TrackDto } from "../models/dto/trackDto";

class MusicService {
    constructor() {

    }

    async getGoogleSearchResult(query: string) {
        let result = await gmp.search(query);
        return result;
    }

    async getTopTen(query: string): Promise<List<TrackDto>> {
        let result = await this.getGoogleSearchResult(query);

        let deserializedObj: SearchRoot = deserialize(SearchRoot, result);

        let theTracks: List<TrackDto> = new List<Entry>(deserializedObj.entries).Where(e => e.type == "1")
            .Select(e => new TrackDto(
                {
                    title: e.track.title,
                    artist: e.track.artist,
                    durationMillis: e.track.durationMillis,
                    album: e.track.album, nid: e.track.nid
                }))
            .Take(10);

        return theTracks;
    }

    async play(query: string): Promise<string> {
        let result = await this.getGoogleSearchResult(query);

        console.log(query);

        let deserializedObj: SearchRoot = deserialize(SearchRoot, result);

        let theTrack: Track = new List<Entry>(deserializedObj.entries).Where(e => e.type == "1").Select(e => e.track).FirstOrDefault();

        let trackUrl: string = await gmp.play(theTrack.storeId);

        let formData: FormData = new FormData();

        formData.append("trackUrl", trackUrl);

        let playerUrl: string = config.get("playerEndpointUrl");

        axios.post(playerUrl, { trackUrl: trackUrl });

        return trackUrl;
    }
}

export default new MusicService();