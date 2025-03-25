import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="custom-container flex items-center justify-between">
			<div>
				<Link
					href="/"
					className="inline-block text-2xl"
				>
					Aman<span className="text-red-400 font-bold">X</span>treme
				</Link>
			</div>
			<div></div>
		</nav>
	);
}
