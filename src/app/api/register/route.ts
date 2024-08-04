import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    
    const data = await request.formData()
    const username = data.get('username')?.toString()
    const password = data.get('password')?.toString()
    const confirm_password = data.get('confirm_password')?.toString()

    try {
        if (!username || !password) return NextResponse.json({ error: 'Username and password required' }, { status: 500 });
        if (password !== confirm_password) return NextResponse.json({ error: "Password doesn't match" }, { status: 500 });

        await sql`INSERT INTO users (username, password, tokens) VALUES (${username}, ${password}, 12);`;
        const user = await sql`SELECT * FROM users WHERE username = ${username} AND password = ${password};`;
        
        cookies().set('userId', user?.rows[0].id);
        cookies().set('currentUser', username);
        cookies().set('tokens', user?.rows[0].tokens);

        return await NextResponse.redirect(new URL('/welcome', request.url));
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
