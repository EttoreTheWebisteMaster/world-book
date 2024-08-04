import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function POST(request: Request) {
    try {
        cookies().delete('currentUser');
        cookies().delete('tokens');
        return NextResponse.redirect(new URL('/login', request.url));
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}