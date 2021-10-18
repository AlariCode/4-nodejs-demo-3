import { NextFunction, Request, Response } from 'express';

export interface IExeptionFilter {
	catch: (err: Error, req: Request, res: Response, next: NextFunction) => void;
}
