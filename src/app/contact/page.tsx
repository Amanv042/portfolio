export default function Contact() {
	return (
		<section className="custom-container">
			<div className="lg:py-28">
				<h1 className="text-center text-3xl lg:hidden md:hidden">Contact Me</h1>
				<div className="border grid lg:grid-cols-2 gap-4 grid-cols-1 p-8">
					<div className="">some image or content not decided yet</div>
					<form className="flex flex-col gap-4 ">
						<input
							type="text"
							placeholder="name"
							className="border px-4 py-2 rounded-md caret-cyan-400 outline-none border-cyan-800 color-white"
						/>
						<input
							type="email"
							placeholder="example@gmail.com"
							className="border px-4 py-2 rounded-md caret-cyan-400 outline-none border-cyan-800 color-white"
						/>
						<textarea
							name="message"
							id=""
							rows={8}
							placeholder="Type your message"
							className="border px-4 py-2 rounded-md caret-cyan-400 outline-none border-cyan-800 color-white resize-none"
						></textarea>
					</form>
				</div>
			</div>
		</section>
	);
}
