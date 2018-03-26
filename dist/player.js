"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerSingleton {
    constructor() {
        this._isPlaying = false;
        if (PlayerSingleton._instance) {
            throw new Error("Error: Instantiation failed: Use Player.getInstance() instead of new.");
        }
        console.log("constructing");
        PlayerSingleton._instance = this;
    }
    static getInstance() {
        console.log("getting instance");
        return PlayerSingleton._instance;
    }
    play() {
        console.log(this._isPlaying);
        if (!this._isPlaying) {
            this._isPlaying = true;
        }
    }
}
PlayerSingleton._instance = new PlayerSingleton();
exports.default = PlayerSingleton;
