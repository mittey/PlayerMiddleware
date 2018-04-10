import { Application } from "express";
import MusicController from "./controllers/MusicController"

export default class Routes {

    _musicController: MusicController = new MusicController();

    constructor(app: Application) {
        app.route("/api/music/play").post(this._musicController.play);
        app.route("/api/music/stop").post(this._musicController.stop);
    }
}