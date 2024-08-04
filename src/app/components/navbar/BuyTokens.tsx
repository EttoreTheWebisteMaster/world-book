import { Button } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function BuyTokens() {
    return (
        <form action='/api/buy-tokens' method="post" style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <Button type="submit" startIcon={<AttachMoneyIcon />}>Buy 10 tokens</Button>
        </form>
    );
}