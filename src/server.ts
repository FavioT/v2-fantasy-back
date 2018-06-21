import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';

// import routers
import PostRouter from './router/PostRouter';
import PlayersRouter from './router/PlayersRouter';

// Server class
class Server {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config() {
    // Set up mongoose
    const MONGO_URI = 'mongodb://localhost:27017/fantasy';
    mongoose.connect(MONGO_URI || process.env.MONGODB_URI)
    console.log('mongoose readyState is ' + mongoose.connection.readyState);

    mongoose.connection.on('open', function (ref) {
      console.log('Connected to MongoDb.');
    });


    // config
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(helmet());
    this.app.use(logger('dev'));
    this.app.use(cors());

    // cors
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS',
      );
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
      );
      res.header('Access-Control-Allow-Credentials', 'true');
      next();
    });

  }

  public routes(): void {
    let router: express.Router;
    router = express.Router();

    this.app.use('/', router);
    this.app.use('/api/v1/posts', PostRouter);
    this.app.use('/api/v1/players', PlayersRouter);

  }
}

// export
export default new Server().app;
