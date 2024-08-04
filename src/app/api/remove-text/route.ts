import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    const data = await request.formData()
    let id = cookies().get('userId')?.value;
    const id_text = data.get('id_text')?.toString()

    try {
            const user = await sql`SELECT * FROM users WHERE id = ${id};`;
            let tokens = user?.rows[0].tokens;

            if (tokens < 3) {
                return NextResponse.json({ error: 'Not enough tokens' }, { status: 500 });
            } else {
                tokens = tokens - 3;
            }

            await sql`UPDATE users SET tokens = ${tokens} WHERE id = ${id};`;
            cookies().set('tokens', JSON.stringify(tokens));

            await sql`DELETE FROM text WHERE ID = ${id_text};`;
            
            return NextResponse.redirect(new URL('/', request.url));
        
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}