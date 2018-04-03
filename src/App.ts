import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import Player from "./player";
import {GMP as gmp} from './GMPlayer';


// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  private _player: Player;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
        gmp.search('we will rock you', res);
      //res.json(Object.assign({},{message: 'Hello World!'}, resp))

    });

    router.post(`/play`, (req, res, next) => {
      let player = Player.getInstance();

      player.play();

      res.json({ message: "playing" });
    });

    router.post(`/stop`, (req, res, next) => {
      let player = Player.getInstance();

      player.stop();

      res.json({ message: "paused" });
    });

    this.express.use('/', router);
  }

}

export default new App().express;