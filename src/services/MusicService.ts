import { GMP as gmp } from "../GMPlayer";
import { List } from "linqts";
import { deserialize } from 'json-typescript-mapper';
import { SearchRoot } from "../models/searchRoot";
import { Track } from "../models/track";
import { Entry } from "../models/entry";
import * as config from "config";
import axios from "axios";
import * as FormData from "form-data";

class MusicService {
    constructor() {

    }

    async getTopTen(query: string) {
        let result = await gmp.search(query);
        return result;
    }

    async play(query: string): Promise<string> {
        let result = await this.getTopTen(query);

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