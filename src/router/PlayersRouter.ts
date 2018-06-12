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

  public GetPost( req: Request, res: Response ): void {
    const slug: String = req.params.slug;
  }

  public CreatePost( req: Request, res: Response ): void {

  }

  public UpdatePost( req: Request, res: Response ): void {

  }

  public DeletePost( req: Request, res: Response ): void {

  }

  routes() {
    this.router.get('/', this.GetAll);
  }

}

// export
const playersRoutes = new PlayersRouter();
playersRoutes.routes();

export default playersRoutes.router;
