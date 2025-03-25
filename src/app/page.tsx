import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/ui/FadeContent";
import { LinkPreview } from "@/components/ui/LinkPreview";
import Particles from "@/components/ui/Particles";
import RotatingText from "@/components/ui/RotatingText";
import ShinyText from "@/components/ui/ShinyText";
import SplitText from "@/components/ui/SplitText";
import { charm } from "@/lib/Fonts";

export default function Home() {
	return (
		<>
			<div className="grid place-content-center h-screen px-6 lg:px-0">
				<div className="space-y-2">
					<h1>
						<SplitText
							text="Hello!"
							className="lg:text-9xl text-6xl font-semibold text-cyan -ml-2"
							delay={150}
							animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
							animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
							easing="easeOutCubic"
							threshold={0.2}
							rootMargin="-50px"
						/>
						<SplitText
							text="I'm Aman"
							className="lg:text-9xl text-6xl font-semibold -ml-2"
							delay={150}
							animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
							animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
							easing="easeOutCubic"
							threshold={0.2}
							rootMargin="-50px"
						/>
					</h1>
					<div className="lg:text-3xl">
						<div className="flex ">
							<BlurText
								text="A full stack developer who codes in "
								animateBy="letters"
								delay={20}
								direction="bottom"
							/>
							<FadeContent
								duration={1700}
								delay={1500}
							>
								<RotatingText
									texts={[
										"React.js",
										"Tailwind",
										"Node.js",
										"Javascript",
										"Css",
										"Sass",
										"Scss",
										"Express.js",
										"MongoDB",
										"Postgres",
									]}
									mainClassName={`bg-cyan text-black font-semibold overflow-hidden px-4 py-0.5 rounded-sm ${charm.className} font-charm antialiased transition-all`}
									staggerFrom={"first"}
									initial={{ y: "100%" }}
									animate={{ y: 0 }}
									exit={{ y: "-120%" }}
									staggerDuration={0.025}
									splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
									transition={{ type: "spring", damping: 100, stiffness: 1000 }}
									rotationInterval={2000}
								/>
							</FadeContent>
						</div>
					</div>
					<div className="text-[rgba(255,255,255,0.3)]">
						<FadeContent
							duration={1700}
							delay={2000}
						>
							<div className="lg:text-2xl text-wrap">
								Feel free to connect with me on{" "}
								<span>
									<ShinyText
										speed={3}
										className="custom-class"
									>
										<LinkPreview
											url="https://www.linkedin.com/in/aman-verma042/"
											className="hover:underline"
											isStatic={true}
											imageSrc="/assets/images/linkedIn-thumbnail.png"
										>
											<span className="text-cyan-500">LinkedIn</span>
										</LinkPreview>
									</ShinyText>
								</span>{" "}
								or follow me on{" "}
								<span>
									<ShinyText
										speed={3}
										className="custom-class"
									>
										<LinkPreview
											url="https://github.com/codebyamanv"
											className="hover:underline"
											isStatic={true}
											imageSrc="/assets/images/github-thumbnail.png"
										>
											<span className="text-cyan-500">Github</span>
										</LinkPreview>
									</ShinyText>
								</span>
							</div>
						</FadeContent>
					</div>
				</div>
				<div style={{ width: "100%", height: "100vh", position: "absolute", inset: "0", zIndex: "-1" }}>
					<Particles
						particleColors={["#ffffff", "#ffffff"]}
						particleCount={500}
						particleSpread={20}
						speed={0.2}
						particleBaseSize={100}
						alphaParticles={false}
						disableRotation={false}
					/>
				</div>
			</div>
		</>
	);
}
