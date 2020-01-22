import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.json([
    {
      id: 'b342a22b-e790-4fa6-b2b0-32bc91aea4b1',
      nickname: 'bannastre',
      email: 'bannastre@gmail.com',
    },
  ]);
});

export default router;
