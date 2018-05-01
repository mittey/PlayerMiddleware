export class TrackDto {
    title: string;
    artist: string;
    durationMillis: string;
    album: string;
    nid: string;

    constructor(args: { title: string, artist: string, durationMillis: string, album: string, nid: string }) {
        this.title = args.title;
        this.artist = args.artist;
        this.durationMillis = args.durationMillis;
        this.album = args.album;
        this.nid = args.nid;
    }
}