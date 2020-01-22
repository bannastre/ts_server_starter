import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

/* GET home page. */
router.get('/healthcheck/ping', function(req: Request, res: Response, next: NextFunction) {
  res.status(200).send({ message: 'OK' });
});

export default router;
