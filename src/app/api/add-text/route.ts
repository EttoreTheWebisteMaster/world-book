import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    const data = await request.formData()
    let id = cookies().get('userId')?.value;
    const text = data.get('text')?.toString()
    const type = data.get('type')?.toString()

    try {
        if (text == '') return NextResponse.json({ error: 'Insert valid text' }, { status: 500 });
        if (type !== 'paragraph' && type !== 'chapter') return NextResponse.json({ error: 'Insert valid type' }, { status: 500 });
        if (!id) return NextResponse.redirect(new URL('/login', request.url));

        const user = await sql`SELECT * FROM users WHERE id = ${id};`;

        if (user.rows.length > 0) {
            let tokens = user?.rows[0].tokens;

            switch (type) {
                case 'paragraph':
                    if (tokens <= 0) {
                        return NextResponse.json({ error: 'Not enough tokens' }, { status: 500 });
                    } else {
                        tokens = tokens - 1;
                    }
                break;

                case 'chapter':
                    if (tokens < 10) {
                        return NextResponse.json({ error: 'Not enough tokens' }, { status: 500 });
                    } else {
                        tokens = tokens - 10;
                    }
                break;
            }

            await sql`UPDATE users SET tokens = ${tokens} WHERE id = ${id};`;
            cookies().set('tokens', JSON.stringify(tokens));

            await sql`INSERT INTO text (id_user, text, type) VALUES (${id}, ${text}, ${type});`;
            
            return NextResponse.redirect(new URL('/', request.url));
        } else {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 500 });
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}