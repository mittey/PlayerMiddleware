export class Track {
    kind: string;
    title: string;
    artist: string;
    composer: string;
    album: string;
    albumArtist: string;
    year: number;
    trackNumber: number;
    genre: string;
    durationMillis: string;
    // albumArtRef: AlbumArtRef[];
    discNumber: number;
    estimatedSize: string;
    trackType: string;
    storeId: string;
    albumId: string;
    artistId: string[];
    nid: string;
    trackAvailableForSubscription: boolean;
    trackAvailableForPurchase: boolean;
    albumAvailableForPurchase: boolean;
    contentType: string;

    constructor() {
        this.kind = void 0;
        this.title = void 0;
        this.artist = void 0;
        this.composer = void 0;
        this.album = void 0;
        this.albumArtist = void 0;
        this.year = void 0;
        this.trackNumber = void 0;
        this.genre = void 0;
        this.durationMillis = void 0;
        // albumArtRef: AlbumArtRef[];
        this.discNumber = void 0;
        this.estimatedSize = void 0;
        this.trackType = void 0;
        this.storeId = void 0;
        this.albumId = void 0;
        this.artistId = void 0;
        this.nid = void 0;
        this.trackAvailableForSubscription = void 0;
        this.trackAvailableForPurchase = void 0;
        this.albumAvailableForPurchase = void 0;
        this.contentType = void 0;
    }
}