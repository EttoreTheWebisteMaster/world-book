import { Box, Typography } from "@mui/material";
import { cookies } from "next/headers";
import BuyTokens from "./BuyTokens";
import LogOutButton from "./LogOutButton";

export default function Navbar() {
    let tokens = cookies().get('tokens')?.value;

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: ' 100%',
            borderTop: '1px solid',
            background: 'white'
        }}>
            <LogOutButton />
            <BuyTokens />
            <Typography variant="subtitle1" sx={{ padding: '12px' }} title={tokens +" Writer's Tokens"}>{tokens} WT</Typography>
        </Box>
    );
}