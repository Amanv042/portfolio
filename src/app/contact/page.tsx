import { CarouselPlugin } from "@/components/Carousel";

export default function Contact() {
	return (
		<section className="lg:pt-12">
			<div className="custom-container">
				<h1 className="text-center text-3xl lg:hidden md:hidden">Contact Me</h1>
				<div className="p-8 flex lg:flex-row flex-col items-center justify-center gap-8">
					<div className="flex-1 hidden lg:block md:block w-full rounded-lg overflow-hidden">
						<CarouselPlugin />
					</div>
					<form className="flex-1 space-y-4 flex flex-col justify-around">
						<div className="lg:leading-10">
							<h1 className="lg:text-4xl md:text-2xl text-lg font-semibold">
								<span className="animate-wave transition-all inline-block">🚀</span> Let&apos;s
								Build Something Awesome!
							</h1>
							<p className="text-justify text-gray-300">
								Have an idea, question, or just want to geek out over tech? Drop me a
								message—I&apos;d love to chat!
							</p>
						</div>
						<div className="space-y-4">
							<input
								type="text"
								placeholder="name"
								className="w-full border px-4 py-2 rounded-md  placeholder:text-white caret-cyan-400 outline-none border-cyan-900 transition-all"
							/>
							<input
								type="email"
								placeholder="example@gmail.com"
								className="w-full border px-4 py-2 rounded-md  placeholder:text-white caret-cyan-400 outline-none border-cyan-900 transition-all"
							/>
							<textarea
								name="message"
								id=""
								rows={8}
								placeholder="Type your message"
								className="w-full border px-4 py-2 rounded-md  placeholder:text-white caret-cyan-400 outline-none border-cyan-900 resize-none transition-all"
							></textarea>
							<button
								type="submit"
								className="w-full bg-cyan rounded-lg py-2 text-black font-semibold cursor-pointer"
							>
								Show Interest
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}
