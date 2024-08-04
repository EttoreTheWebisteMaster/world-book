import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const id = cookies().get('userId')?.value;
    
    try {
        const user = await sql`SELECT * FROM users WHERE id = ${id};`;

        if (user.rows.length > 0) {
            const tokens = user?.rows[0].tokens + 10;

            await sql`UPDATE users SET tokens = ${tokens} WHERE id = ${id};`;
            cookies().set('tokens', tokens);
            return NextResponse.redirect(new URL('/', request.url));
        } else {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}