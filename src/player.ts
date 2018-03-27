import * as fs from "fs";
import * as lame from "lame";
import * as Speaker from "speaker";

export default class PlayerSingleton {
    private static _instance: PlayerSingleton = new PlayerSingleton();

    private _isPlaying: boolean = false;
    private _stream: any;

    constructor() {
        if (PlayerSingleton._instance) {
            throw new Error("Error: Instantiation failed: Use Player.getInstance() instead of new.");
        }
        PlayerSingleton._instance = this;
    }

    public static getInstance(): PlayerSingleton {
        return PlayerSingleton._instance;
    }

    public play(): void {
        console.log("playing");

        if (!this._stream) {
            this._stream = fs.createReadStream("test.mp3");
            let decoder: any = new lame.Decoder();
            let speaker: any;
            this._stream.pipe(decoder).on('format', function (format) {
                speaker = new Speaker(format);
                this.pipe(speaker);
            });
        } else {
            this._stream.resume();
        }
    }

    public stop(): void {
        console.log("tying to pause");
        if (this._stream) {
            console.log("there is a stream to pause");
            this._stream.unpipe();
        }
    }
}