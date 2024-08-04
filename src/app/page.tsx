import { cookies } from "next/headers";
import styles from "./page.module.css";
import { redirect } from 'next/navigation';
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
			<ParagraphsList />
			{input}
			<Navbar />
		</>
	);
}
