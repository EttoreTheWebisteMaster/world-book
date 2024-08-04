import { cookies } from "next/headers";
import styles from "./page.module.css";
import { redirect } from 'next/navigation';
import { Box, Typography } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import ParagraphsList from "./components/paragraphs/ParagraphsList";
import InputText from "./components/input/InputText";

export default function Home() {
    let userId = cookies().get('userId')?.value;
    let tempTokens = cookies().get('tokens')?.value;
	let input;
    
	if (!userId) {
		redirect('/login');
	}

	if(!tempTokens) {
		tempTokens = '0';
	}

	let tokens = parseInt(tempTokens);
	if (tokens > 0) {
		input = <InputText />
	}

	return (
		<>
			<Box sx={{ padding: '50px 100px 150px' }}>
				<Typography variant="h4" textAlign='center'>The World's Book</Typography>
				<ParagraphsList />
			</Box>
			{input}
			<Navbar />
		</>
	);
}
