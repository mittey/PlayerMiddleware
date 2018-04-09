import { Request, Response, NextFunction } from "express";
import MusicService from "../services/MusicService"

export default class MusicController {
    constructor() {

    }

    async play(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.log("play");

        let song = req.body.song;
        let artist = req.body.artist;

        let result = await MusicService.play(song);

        res.json(result);
    }

    stop(req: Request, res: Response, next: NextFunction): void {
        console.log("stop");
        res.json({ song: "stopped" });
    }
}