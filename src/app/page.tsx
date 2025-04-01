import { techList } from "@/data/constant";
import { FlipWords } from "@/components/ui/FlipWords";
import { LinkPreview } from "@/components/ui/LinkPreview";
import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/ui/FadeContent";
import Particles from "@/components/ui/Particles";
import ShinyText from "@/components/ui/ShinyText";
import SplitText from "@/components/ui/SplitText";

export default function Home() {
	return (
		<>
			<div className="grid place-content-center lg:pt-56 md:pt-56 pt-44 px-4 lg:px-0">
				<div className="space-y-2 px-10">
					<div>
						<SplitText
							text="<Hello World!/>"
							className="lg:text-8xl md:test-5xl sm:text-5xl text-3xl font-black text-cyan"
							delay={150}
							animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
							animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
							easing="easeOutCubic"
							threshold={0.2}
							rootMargin="-50px"
						/>
					</div>
					<div className="lg:text-2xl">
						<div className="flex flex-col lg:flex-row">
							<BlurText
								text="I'm Aman. A full stack developer. "
								animateBy="letters"
								delay={20}
								direction="bottom"
							/>
							<div className="flex">
								<BlurText text="Expert in" animateBy="letters" delay={20} direction="bottom" />
								<FadeContent duration={1700} delay={1500}>
									<FlipWords words={techList} className="text-cyan font-bold " />
								</FadeContent>
							</div>
						</div>
					</div>
					<div className="text-[rgba(255,255,255,0.3)]">
						<FadeContent duration={1700} delay={2000}>
							<div className="lg:text-2xl text-wrap">
								Feel free to connect with me on{" "}
								<span>
									<ShinyText speed={3}>
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
									<ShinyText speed={3}>
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
