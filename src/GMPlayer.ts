//import {PlayMusic} from 'playmusic';
var PlayMusic = require('playmusic');
import { config2 as config } from './config'
//var StreamPlayer = require('stream-player');
var request = require('request');
var lame = require('lame');
var speaker = require('speaker');
var audioOptions = { channels: 2, bitDepth: 16, mode: lame.STEREO };
var self = null;

var GMPlayer = function () {
    self = this;
    this.speaker = null;
    this.instance = new PlayMusic();
    this.instance.init(config, function (err) {
        if (err) console.log(err);
    });
};
GMPlayer.prototype.search = function (query) {
    return new Promise((resolve, reject) => {
        this.instance.search(query, 10, function (err, data) {
            if (err) throw err;
            // res.json(data);
            resolve(data);
        })
    });

    // this.instance.search(query, 10, function (err, data) {
    //     if (err) throw err;
    //     // res.json(data);

    // })
};

GMPlayer.prototype.play = function (id, res) {

    return new Promise((resolve, reject) => {
        this.instance.getStreamUrl(id, (err, url) => {
            resolve(url);
        });
    });

    // this.instance.getStreamUrl(id, (err, url) => {
    //     if (err) res.json(err);
    //     // request.get(url).on('response', res => {
    //     //     res.pipe(new lame.Decoder).pipe(new speaker(audioOptions));
    //     // });
    //     res.json({ songUrl: url, message: 'Song is playing' });

    // })
}

export let GMP = new GMPlayer();