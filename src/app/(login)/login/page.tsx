import { Box, Button, TextField, Typography } from "@mui/material";

export default function login() {
    return (
        <form action="/api/login" method="post">
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h3">Login</Typography>
                <br />
                <TextField label="Username" variant="standard" name="username" />
                <TextField label="Password" variant="standard" name="password" type="password" />
                <br />
                <Button variant="contained" type="submit">Login</Button>
            </Box>
        </form>
    );
}