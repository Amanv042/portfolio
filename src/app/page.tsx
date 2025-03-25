import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/ui/FadeContent";
import { LinkPreview } from "@/components/ui/LinkPreview";
import Particles from "@/components/ui/Particles";
import RotatingText from "@/components/ui/RotatingText";
import ShinyText from "@/components/ui/ShinyText";
import SplitText from "@/components/ui/SplitText";
import { meow_script } from "@/lib/Fonts";

export default function Home() {
	return (
		<>
			<div>
				<div className=" grid place-content-center h-screen">
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
					</h1>
					<div className="lg:text-3xl flex my-2">
						<BlurText
							text="I'm Aman Verma. I'm "
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
									"Full-Stack Developer",
									"Gamer",
									"Esports player",
									"Damage 0% Masti 100%",
								]}
								mainClassName={`bg-cyan text-black font-semibold overflow-hidden px-4 rounded-sm ${meow_script.variable} font-meow-script`}
								staggerFrom={"last"}
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
										url="https://github.com/Amanv042"
										className="hover:underline"
									>
										<span className="text-cyan-500">Github</span>
									</LinkPreview>
								</ShinyText>
							</span>
						</div>
					</FadeContent>
				</div>
				<div style={{ width: "100%", height: "100vh", position: "absolute", inset: "0", zIndex: "-1" }}>
					<Particles
						particleColors={["#ffffff", "#ffffff"]}
						particleCount={300}
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
