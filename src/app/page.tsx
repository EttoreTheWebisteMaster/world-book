import { cookies } from "next/headers";
import styles from "./page.module.css";
import { redirect } from 'next/navigation';
import { Typography } from "@mui/material";
import Navbar from "./components/navbar/Navbar";
import Paragraphs from "./components/paragraphs/Paragraphs";

export default function Home() {
    let userId = cookies().get('userId')?.value;
    
	if (!userId) {
		redirect('/login');
	}

	return (
		<>
			<Typography variant="h4" textAlign='center'>The World's Book</Typography>
			<Paragraphs />
			<Navbar />
		</>
	);
}
