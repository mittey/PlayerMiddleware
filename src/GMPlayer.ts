//import {PlayMusic} from 'playmusic';
var PlayMusic = require('playmusic');
import { config2 as config } from './config'
//var StreamPlayer = require('stream-player');
var request = require('request');
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
};

GMPlayer.prototype.play = function (id, res) {

    return new Promise((resolve, reject) => {
        this.instance.getStreamUrl(id, (err, url) => {
            resolve(url);
        });
    });
}

export let GMP = new GMPlayer();