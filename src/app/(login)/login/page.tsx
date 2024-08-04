import { Box, Button, TextField, Typography } from "@mui/material";

export default function login() {
    return (
        <>
            <form action="/api/login" method="post">
                <br /><br />
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5">Login</Typography>
                    <TextField label="Username" variant="standard" name="username" />
                    <TextField label="Password" variant="standard" name="password" type="password" />
                    <br />
                    <Button variant="contained" type="submit">Login</Button>
                </Box>
            </form>
            <form action="/register">
                <br /><br />
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h6">Don't have an account?</Typography>
                    <Button variant="text" type="submit">Register</Button>
                </Box>
            </form>
        </>
    );
}