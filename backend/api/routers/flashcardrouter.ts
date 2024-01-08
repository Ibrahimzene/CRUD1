import { Router } from 'express';

export const flashcardRouter = Router();

flashcardRouter.get('/', (_req, res) => {
	res.json('get all flashcards');
});

flashcardRouter.get('/:suuid', (req, res) => {
	const suuid = req.params.suuid;
	res.json(`get one flashcard with suuid ${suuid}`);
});

flashcardRouter.post('/', (_req, res) => {
	res.json('create flashcard');
});

flashcardRouter.put('/:suuid', (req, res) => {
	const suuid = req.params.suuid;
	res.json(`replace all fields flashcard with suuid ${suuid}`);
});

flashcardRouter.patch('/:suuid', (req, res) => {
	const suuid = req.params.suuid;
	res.json(`replace some fields on flashcard with suuid ${suuid}`);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
flashcardRouter.delete('/:suuid', (req, res) => {
	
})