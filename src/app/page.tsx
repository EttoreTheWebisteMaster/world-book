import { cookies } from "next/headers";
import styles from "./page.module.css";
import { redirect } from 'next/navigation';
import { Typography } from "@mui/material";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
    let currentUser = cookies().get('currentUser')?.value;
    
	if (!currentUser) {
		redirect('/login');
	}

	return (
		<>
			<Typography variant="h4" textAlign='center'>The World's Book</Typography>
			<Navbar />
		</>
	);
}
