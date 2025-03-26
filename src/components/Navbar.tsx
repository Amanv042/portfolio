"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";

const PageUrls = [
	{
		name: "Projects",
		path: "/projects",
	},
	{
		name: "Experience",
		path: "/experience",
	},
	{
		name: "About",
		path: "/about",
	},
	{
		name: "Contact",
		path: "/contact",
	},
];

export default function Navbar() {
	const urlPath = usePathname();
	return (
		<nav className="custom-container flex items-center justify-between">
			<div>
				<Link href="/" className="inline-block lg:text-2xl text-lg">
					code<span className="text-cyan font-bold">by</span>aman
				</Link>
			</div>
			<div>
				<ul className="hidden lg:flex gap-6 items-center text-lg italic font-semibold">
					{PageUrls.map(({ name, path }, i) => (
						<li
							key={i}
							className={`py-1 transition-all duration-300 hover:underline ${
								urlPath === path ? "text-cyan" : ""
							}`}
						>
							<Link className="inline-block" href={path}>
								{name}
							</Link>
						</li>
					))}
				</ul>
				<div className="lg:hidden grid place-items-center">
					<Drawer direction="right">
						<DrawerTrigger>
							<Menu size={28} />
						</DrawerTrigger>
						<DrawerContent>
							<div className="relative">
								<DrawerClose>
									<X size={28} className="absolute right-6 top-6" />
								</DrawerClose>
							</div>

							<div className="pt-16 px-6 flex flex-col gap-2">
								{PageUrls.map(({ name, path }, i) => (
									<DrawerClose asChild>
										<Link
											key={i}
											className={`inline-block py-1 transition-all duration-300 hover:underline border ${
												urlPath === path ? "text-cyan" : ""
											}`}
											href={path}
										>
											{name}
										</Link>
									</DrawerClose>
								))}
							</div>

							<DrawerFooter>
								<div className="text-[rgba(255,255,255,0.3)] text-center">
									Thank You for visiting my Portfolio.
								</div>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</div>
			</div>
		</nav>
	);
}
