import { Box, Button, TextField, Typography } from "@mui/material";

export default function login() {
    return (
        <>
            <form action="/api/register" method="post">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Typography variant="h5">Register</Typography>
                    <TextField label="Username" variant="standard" name="username" />
                    <TextField label="Password" variant="standard" name="password" type="password" />
                    <TextField label="Confirm Password" variant="standard" name="confirm_password" type="password" />
                    <br />
                    <Button variant="contained" type="submit">Register</Button>
                </Box>
            </form>
        </>
    );
}