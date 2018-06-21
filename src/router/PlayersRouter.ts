import { Router, Request, Response, NextFunction } from 'express';
import Players from '../models/Players';

class PlayersRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public GetAll( req: Request, res: Response ): void {

    Players.find({})
    .then((data) => {
      const status = req.statusCode;
      res.json({
        status,
        data
      });
    })
    .catch((err) => {
      const status = req.statusCode;
      res.json({
        status,
        err
      });
    });

  }

  public GetPlayer( req: Request, res: Response ): void {    
    const keyword: String = req.params.name;

    Players.find({ "name" : { '$regex' : keyword, '$options': 'i' }})
    .then((data) => {
      const status = res.statusCode;
      res.json({
        status,
        data
      });
    })
    .catch((err) => {
      const status = res.statusCode;
      res.json({
        status,
        err
      })
    })
  }

  public CreatePost( req: Request, res: Response ): void {

  }

  public UpdatePost( req: Request, res: Response ): void {

  }

  public DeletePost( req: Request, res: Response ): void {

  }

  routes() {
    this.router.get('/', this.GetAll);
    this.router.get('/:name', this.GetPlayer);
  }

}

// export
const playersRoutes = new PlayersRouter();
playersRoutes.routes();

export default playersRoutes.router;
