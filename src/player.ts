import * as Player from "play-sound";

export default class PlayerSingleton {
    private static _instance: PlayerSingleton = new PlayerSingleton();

    private _isPlaying: boolean = false;

    constructor() {
        if (PlayerSingleton._instance) {
            throw new Error("Error: Instantiation failed: Use Player.getInstance() instead of new.");
        }
        console.log("constructing");
        PlayerSingleton._instance = this;
    }

    public static getInstance(): PlayerSingleton {
        console.log("getting instance");
        return PlayerSingleton._instance;
    }

    public play(): void {
        console.log(this._isPlaying);
        if (!this._isPlaying) { this._isPlaying = true; }
    }
}