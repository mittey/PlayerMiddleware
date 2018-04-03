//import {PlayMusic} from 'playmusic';
var PlayMusic = require('playmusic');
import {config2 as config} from './config'

var GMPlayer = function(){
    this.instance = new PlayMusic();
    //this.instance.login({email: config.email, password: config.pw, androidId: config.androidId}, function(err, obj){
    this.instance.init(config, function(err){
            if (err) console.log(err);
        });
    };
GMPlayer.prototype.search = function (query, res){
    this.instance.search(query, 10, function(err, data){
        if (err) throw err;
        res.json(data);
        //return {data: data};

    })
};

export let GMP = new GMPlayer();