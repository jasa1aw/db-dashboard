'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import { Paper, Button} from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";

export default function Footer(){
	const { data: session } = useSession();

	// const FooterLink = styled(Link)`
	// 	color: ${theme.palette.text.primary};
	// `;

	return (
		<footer className='footer'>
			<Paper sx={{ width: "100%" , backgroundColor:"#1A2027"}} color={"#262626"} >
				<ul role="menu">
					<li>
						<Link href={"/"}>Home</Link>
					</li>
					<li>
						<Link href={"/dashboard/data"}>Data</Link>
					</li>
					<li>
						<Link href={"/dashboard/profile"}>
							Profile
						</Link>
					</li>
					<li>
						<Link href={"/dashboard/settings"}>
							Settings
						</Link>
					</li>
					<li>
						<Link href={"/#termsandconditions"}>
							Terms & Conditions
						</Link>
					</li>
					<li>
						<Link href={"/#accessibilitystatement"}>
							Accessibility statement
						</Link>
					</li>
					<li>
						<Button
							variant={"text"}
							color={session ? "error" : "success"}
							onClick={() => (session ? signOut() : signIn())}
						>
							{session ? "Sign Out" : "Sign In"}
						</Button>
					</li>
				</ul>
			</Paper>
		</footer>
	);
};
