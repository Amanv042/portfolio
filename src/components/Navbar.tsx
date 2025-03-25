import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="custom-container flex items-center justify-between">
			<div>
				<Link
					href="/"
					className="inline-block text-2xl"
				>
					code<span className="text-cyan font-bold">by</span>aman
				</Link>
			</div>
			<div></div>
		</nav>
	);
}
