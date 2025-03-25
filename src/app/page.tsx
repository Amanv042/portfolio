import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroudCollision";
import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/ui/FadeContent";
import { LinkPreview } from "@/components/ui/LinkPreview";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import ShinyText from "@/components/ui/ShinyText";
import SplitText from "@/components/ui/SplitText";

const texts = [
	"HTML CSS SCSS SASS JAVASCRIPT REACT.JS TAILWIND BOOTSTRAP SHADCN MATERIALUI ZOD",
	"NODE.JS EXPRESS.JS MONGODB POSTGRES MYSQL AUTHENTICATION USER-MANAGEMENT ENCRYPTION RENDER",
];

export default function Home() {
	return (
		<>
			<div>
				<BackgroundBeamsWithCollision>
					<div>
						<div className="px-6 lg:px-0 ">
							<h1>
								<SplitText
									text="Hello!"
									className="lg:text-9xl text-6xl font-semibold text-red-400 -ml-2"
									delay={150}
									animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
									animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
									easing="easeOutCubic"
									threshold={0.2}
									rootMargin="-50px"
								/>
							</h1>
							<div className="lg:text-3xl">
								<BlurText
									text="I'm Aman Verma. A Full-Stack Developer."
									animateBy="letters"
									delay={20}
									direction="bottom"
								/>
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
												<span className="text-red-400">LinkedIn</span>
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
												<span className="text-red-400">Github</span>
											</LinkPreview>
										</ShinyText>
									</span>
								</div>
							</FadeContent>
						</div>

						<div className="absolute left-0 bottom-8">
							<ScrollVelocity
								texts={texts}
								velocity={30}
								className="text-[rgba(255,255,255,0.1)]"
							/>
						</div>
					</div>
				</BackgroundBeamsWithCollision>
			</div>
		</>
	);
}
