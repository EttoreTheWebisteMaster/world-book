import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { cookies } from "next/headers";

export default function InputText() {
    let tempTokens = cookies().get('tokens')?.value;
    let select = (
        <input value='paragraph' name='type' hidden readOnly />
    );

    if(!tempTokens) {
		tempTokens = '0';
	}

	let tokens = parseInt(tempTokens);
	if (tokens >= 10) {
		select = (
            <>
                <FormControl sx={{ minWidth: '130px' }}>
                    <InputLabel>Type</InputLabel>
                    <Select
                        defaultValue="paragraph"
                        label="Type"
                        name="type"
                    >
                        <MenuItem value='paragraph'>Paragraph</MenuItem>
                        <MenuItem value='chapter'>Chapter</MenuItem>
                    </Select>
                </FormControl>&nbsp;
            </>
        );
	}

    if (tokens > 0) {
        return (
            <form method="post" action="/api/add-text" style={{
                display: 'flex',
                position: 'fixed',
                width: '100%',
                left: '0',
                bottom: '53px',
                padding: '12px',
                boxSizing: 'border-box',
                background: 'white'
            }}>
                <TextField name="text" label="Input your text here..." variant="outlined" fullWidth required inputProps={{ maxLength: 255 }} />&nbsp;
                    {select}
                <Button type="submit" variant="contained" endIcon={<SendIcon />} sx={{ minWidth: '100px' }} >
                    Send
                </Button>
            </form>
        )
    }
}