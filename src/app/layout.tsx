import type { Metadata } from "next";
import { Container } from "@mui/material";
import "./globals.css";

export const metadata: Metadata = {
	title: "World's Book",
	description: "A book written by everyone in the world",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Container>{children}</Container>
			</body>
		</html>
	);
}
