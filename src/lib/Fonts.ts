import { Meow_Script, Poppins } from "next/font/google";

export const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const meow_script = Meow_Script({
	variable: "--font-meow-script",
	weight: ["400"],
	subsets: ["latin"],
});
