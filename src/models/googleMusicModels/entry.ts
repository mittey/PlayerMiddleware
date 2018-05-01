import { Track } from "./track";
import { JsonProperty } from "json-typescript-mapper";

export class Entry {
    @JsonProperty("type")
    type: string;
    // artist: Artist;
    @JsonProperty({ clazz: Track, name: 'track' })
    track: Track;
    // album: Album;
    // playlist: Playlist;
    // station: Station;

    constructor() {
        this.track = void 0;
        this.type = void 0;
    }
}