import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    
    const data = await request.formData()
    const username = data.get('username')?.toString()
    const password = data.get('password')?.toString()

    try {
        if (!username || !password) throw new Error('Username and password required');
        const user = await sql`SELECT * FROM users WHERE username = ${username} AND password = ${password};`;

        if (user.rows.length > 0) {
            cookies().set('userId', user?.rows[0].id);
            cookies().set('currentUser', username);
            cookies().set('tokens', user?.rows[0].tokens);

            return await NextResponse.redirect(new URL('/', request.url));
        } else {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}