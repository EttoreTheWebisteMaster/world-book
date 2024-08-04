import { Box, Typography } from "@mui/material";

export default function Chapter(props: {
    text: string,
    user: string
}) {
    return (
        <Box>
            <br />
            <Typography variant="caption">{props.user}</Typography>
            <Typography variant="h5" sx={{
                paddingBottom: '4px',
                borderBottom: '1px solid'
            }}>{props.text}</Typography>
            <br />
        </Box>

    );
}