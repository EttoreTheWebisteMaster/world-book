import { Box, IconButton, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { cookies } from "next/headers";

export default function Paragraph(props: {
    text: string,
    user: string,
    id_text: any
}) {
    let tempTokens = cookies().get('tokens')?.value;

    if(!tempTokens) {
		tempTokens = '0';
	}

    let tokens = parseInt(tempTokens)
    let iconButton;

    if (tokens >= 3) {
        iconButton = (
            <form method="post" action='/api/remove-text'>
                <input value={props.id_text} readOnly name="id_text" hidden />
                <IconButton type='submit' size="small" title="Remove for 3 Writer's Token">
                    <ClearIcon fontSize="inherit" />
                </IconButton>
            </form>
        )
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Typography variant="caption">{props.user}</Typography>
                {iconButton}
            </Box>
            <Typography>{props.text}</Typography>
            <br />
        </>

    );
}