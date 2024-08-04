import { sql } from '@vercel/postgres';
import Paragraph from './Paragraph';
import Chapter from './Chapter';

export default async function ParagraphsList() {
    const text = await sql`SELECT *, text.id AS id_text FROM text INNER JOIN users ON users.id = id_user;`;
    let rows = [];

    for (let row of text.rows) {
        let rowElem;
        
        if (row.type == 'paragraph') {
            rowElem = <Paragraph text={row.text} user={row.username} id_text={row.id_text} />
        } else if (row.type == 'chapter') {
            rowElem = <Chapter text={row.text} user={row.username}/>
        } 
        
        rows.push(
            rowElem
        )
    }

    return rows;
}