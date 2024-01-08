import { Router } from 'express';

export const flashcardRouter = Router();

flashcardRouter.get('/', (_req, res) => {
	res.json('get all flashcards');
})