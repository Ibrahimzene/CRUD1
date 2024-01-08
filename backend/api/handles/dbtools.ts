import { join } from 'path';
import { JSONFile } from 'lowdb/node';
import { Low } from 'lowdb';
import { IDatabase } from '../../interfaces';

export const getDb = async () => {
	try {
		const projectBasePath = process.cwd();
		const dbPathAndFileName = join(projectBasePath, 'backend/data/db.json');
		const adapter = new JSONFile<IDatabase>(dbPathAndFileName);
		const db: Low<IDatabase> = new Low<IDatabase>(adapter, {} as IDatabase);
		await db.read();
		return db;
	}
	catch (e) {
		console.log(`Error: database failed to load`);
	}
}