import { Box, Button, TextField, Typography } from "@mui/material";

export default function login() {
    return (
        <>
            <br /><br />
            <Box display="flex" flexDirection="column" alignItems="center" textAlign='center'>
                <Typography variant="h5">Welcome to "The World's Book" where every voice shapes the story!</Typography>
                <Typography>We're thrilled to have you join this unique, global writing adventure. Before you dive into crafting your literary masterpiece, here are a few simple rules to guide you:</Typography>
                <br />
                <Typography variant="h6"><b>Your Creative Currency: Writer's Tokens</b></Typography>
                <ul style={{ textAlign: 'left' }}>
                    <li><Typography><b>Starting Balance:</b>Every new author begins their journey with <b>12 Writer's Tokens</b>.</Typography></li>
                    <li><Typography><b>Paragraphs</b> Use <b>1 token</b> to add a 255-character paragraph to the ongoing narrative.</Typography></li>
                    <li><Typography><b>Edits</b> Spotted something that doesn’t fit? You can remove any paragraph, regardless of the author, for <b>3 tokens</b>.</Typography></li>
                    <li><Typography><b>New Chapters</b> Ready to steer the story in a new direction? Create a new chapter with <b>10 tokens</b>.</Typography></li>
                    <li><Typography><b>Top Up</b> Running low on tokens? You can always purchase an additional <b>10 tokens</b>.</Typography></li>
                </ul>
                <Typography variant="h6"><b>Our Golden Rule: Have Fun!</b></Typography>
                <br />
                <Typography>
                    This is your space to write, imagine, and collaborate with a global community of storytellers.
                    Embrace the unexpected twists and turns every contribution adds to the richness of our collective tale.
                    <br /><br />
                    We can’t wait to see the stories you'll help create. Let your imagination run wild and enjoy the journey of "The World's Book"!
                </Typography>
                <form action="/" method="post">
                    <br /><br />
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Button variant="contained" type="submit">Let's start!</Button>
                    </Box>
                </form>
            </Box>
        </>
    );
}