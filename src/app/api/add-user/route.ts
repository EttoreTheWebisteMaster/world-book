import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const username = searchParams.get('username');
	const password = searchParams.get('password');

	try {
		if (!username || !password) throw new Error('Username and password required');
		await sql`INSERT INTO users (username, password, tokens) VALUES (${username}, ${password}, 10);`;
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}

	const pets = await sql`SELECT * FROM users;`;
	return NextResponse.json({ pets }, { status: 200 });
}