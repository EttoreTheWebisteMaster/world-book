import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    const username = cookies().get('currentUser')?.value;
    
    try {
        const user = await sql`SELECT * FROM users WHERE username = ${username};`;

        if (user.rows.length > 0) {
            const tokens = user?.rows[0].tokens + 10;

            await sql`UPDATE users SET tokens = ${tokens} WHERE username = ${username};`;
            cookies().set('tokens', tokens);
            return NextResponse.redirect(new URL('/', request.url));
        } else {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}