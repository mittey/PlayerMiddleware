import { Entry } from "./entry";
import { JsonProperty } from "json-typescript-mapper";

export class SearchRoot {
    // kind: string;
    @JsonProperty({ clazz: Entry, name: "entries" })
    entries: Entry[];
    // clusterOrder: string[];  

    constructor() {
        this.entries = void 0;
    }
}