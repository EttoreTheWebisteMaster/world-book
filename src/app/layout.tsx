import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";
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
				<Container>
					<Box sx={{ padding: '12px 100px 150px' }}>
						<Box display='flex' justifyContent='center'>
							<img src="/the-worlds-book.png" height='200px'/>
						</Box>
						{children}
					</Box>
				</Container>
			</body>
		</html>
	);
}
