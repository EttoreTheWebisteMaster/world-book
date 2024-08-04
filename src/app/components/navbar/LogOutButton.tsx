import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Typography } from '@mui/material';
import { cookies } from 'next/headers';

export default function LogOutButton() {
    let currentUser = cookies().get('currentUser')?.value;

    return (
        <form action="/api/logout" method="post" style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '12px'
        }}>
            <Button endIcon={<LogoutIcon />} title="Logout" type='submit'>
                <Typography variant="subtitle1">{currentUser}</Typography>
            </Button>
        </form>
    );
}