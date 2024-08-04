import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	try {
		const result = await sql`CREATE TABLE IF NOT EXISTS users (id SERIAL, username varchar(255) NOT NULL UNIQUE, password varchar(255) NOT NULL, tokens int, PRIMARY KEY (id));`;
		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}