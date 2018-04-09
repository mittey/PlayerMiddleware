import { GMP as gmp } from "../GMPlayer";
import { List } from "linqts";
import { deserialize } from 'json-typescript-mapper';
import { SearchRoot } from "../models/searchRoot";
import { Track } from "../models/track";
import { Entry } from "../models/entry";

class MusicService {
    constructor() {

    }

    async getTopTen(query: string) {
        let result = await gmp.search(query);
        return result;
    }

    async play(query: string) {
        let result = await this.getTopTen(query);

        let obj: SearchRoot = deserialize(SearchRoot, result);

        let afterSort: Track = new List<Entry>(obj.entries).Where(e => e.type == "1").Select(e => e.track).FirstOrDefault();

        // console.log(result);

        // let afterSort = result.entries.Where(e => e.type == 1);

        return afterSort;
    }
}

export default new MusicService();