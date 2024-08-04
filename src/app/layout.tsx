'use client'
import { Box, Container } from "@mui/material";
import "./globals.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#000',
		},
	},
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={theme}>
					<Container>
						<Box sx={{ padding: '12px 100px 150px' }}>
							<Box display='flex' justifyContent='center'>
								<img src="/the-worlds-book.png" height='200px' />
							</Box>
							{children}
						</Box>
					</Container>
				</ThemeProvider>
			</body>
		</html>
	);
}
