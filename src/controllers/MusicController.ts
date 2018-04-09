import { Request, Response, NextFunction } from "express";
import MusicService from "../services/MusicService"
import { Track } from "../models/track";

export default class MusicController {
    constructor() {

    }

    async play(req: Request, res: Response, next: NextFunction): Promise<void> {
        let query = req.body.query;

        let result: string = await MusicService.play(query);

        res.json({ trackUrl: result });
    }

    stop(req: Request, res: Response, next: NextFunction): void {
        console.log("stop");
        res.json({ song: "stopped" });
    }
}