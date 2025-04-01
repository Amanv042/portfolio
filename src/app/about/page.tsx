import { CodeBlock } from "@/components/ui/CodeBlock";
import { techList } from "@/data/constant";
import { Bookmark, Globe } from "lucide-react";

export default function About() {
	const code = `	type SoftwareDeveloper = {
		name: string;
		location:string;
		role:string;
		stack: string;
	}
	
	const AboutMe = ({name, location, role, stack}: SoftwareDeveloper) => {
		return(
		<div>
			<h1 className="text-center text-3xl font-black">Aman Verma</h1>
			<p></p>
		</div>
	)}
	`;

	return (
		<section className="custom-container">
			<div className="lg:flex gap-8 space-y-8">
				<div className="max-w-3xl mx-auto w-full flex-1">
					<CodeBlock language="tsx" filename="about_me.ts" highlightLines={[10, 12]} code={code} />
				</div>
				<div className="flex-1">
					<div className="bg-[#1c1c1c] h-[800px] w-full rounded-xl overflow-y-scroll">
						<div className="max-w-[95%] mx-auto lg:px-4 lg:py-4 px-2 py-4 text-[#ededed] space-y-4">
							{/* Header */}
							<div className="text-[#ededed]">
								<div className="focus:outline-none border border-[#ededed] w-full px-4 py-2 rounded-full flex items-center justify-between">
									<div className="flex items-center gap-2">
										<span>
											<Globe />
										</span>{" "}
										<div>https://amanv.vercel.app</div>
									</div>
									<div>
										<Bookmark />
									</div>
								</div>
							</div>

							{/* content */}
							<div className="border border-[#ededed] rounded-xl p-4 text-justify space-y-4 ">
								<div className="space-y-4 ">
									<h1 className="text-center text-3xl font-black">Aman Verma</h1>
									<p>
										Currently working as a Freelancer in the field of full stack web
										developement. My work revolves around efficient, user friendly,
										scalable application using modern tech like Next.js and TailwindCSS.
									</p>
									<p>
										My approach to solving any problem related to login or design is like
										solving Cubes or playing chess. Occasionally this leads me to staying
										up too late to figure out why something isn't working properly.
									</p>
									<div className="bg-cyan-950 text-[#ededed] rounded-xl p-4">
										<div className="text-cyan">// Fun Fact:</div>
										<p>
											Sometimes I write code that even I dont know how that is working.
											And, sometimes I write code that takes me ages to debug or you
											can say i can write debug thesis and it will work for all the
											years of engineering.
										</p>
									</div>
								</div>
								<div className="space-y-4">
									<h2>Core Technologies</h2>
									<div className="flex flex-wrap gap-2">
										{techList.map((tech) => (
											<div
												key={tech}
												className="bg-cyan px-4 py-2 rounded-full text-[#313131] font-semibold"
											>
												{tech}
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
