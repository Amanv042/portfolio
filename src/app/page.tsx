import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroudCollision";
import BlurText from "@/components/ui/BlurText";
import FadeContent from "@/components/ui/FadeContent";
import { LinkPreview } from "@/components/ui/LinkPreview";
import RotatingText from "@/components/ui/RotatingText";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import ShinyText from "@/components/ui/ShinyText";
import SplitText from "@/components/ui/SplitText";

const marqueeText = {
	text1: [
		"HTML CSS SCSS SASS JAVASCRIPT REACT.JS TAILWIND BOOTSTRAP SHADCN CHAKRA-UI ANT-DESIGN MATERIALUI",
		"NODE.JS EXPRESS.JS MONGODB POSTGRES MYSQL AUTHENTICATION USER-MANAGEMENT ENCRYPTION RENDER",
	],
	text2: ["TAILWIND BOOTSTRAP SHADCN MATERIALUI CHAKRA-UI ANT-DESIGN", "ZOD YUP JOI"],
	text3: ["NODE.JS EXPRESS.JS NESTJS FASTIFY KOA HAPI", "MONGODB POSTGRES MYSQL SQLITE FIREBASE SUPABASE"],
	text4: ["AUTHENTICATION JWT OAUTH2 PASSPORT BCRYPT ARGON2", "USER-MANAGEMENT RBAC ACL MULTI-TENANCY"],
	text5: ["ENCRYPTION CRYPTO.JS BCRYPT ARGON2", "DEPLOYMENT RENDER VERCEL NETLIFY FLY.IO AWS DOCKER"],
};

export default function Home() {
	return (
		<>
			<div>
				<BackgroundBeamsWithCollision>
					<div>
						<div className="grid border bg-[rgba(255,255,255,0.1)] backdrop-blur-lg shadow-lg px-16 py-8 z-20 rounded-bl-4xl rounded-tr-4xl">
							<h1>
								<SplitText
									text="Hello!"
									className="lg:text-9xl text-6xl font-semibold text-cyan-300 -ml-2"
									delay={150}
									animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
									animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
									easing="easeOutCubic"
									threshold={0.2}
									rootMargin="-50px"
								/>
							</h1>
							<div className="lg:text-3xl flex">
								<BlurText
									text="I'm Aman Verma. I'm "
									animateBy="letters"
									delay={20}
									direction="bottom"
								/>
								<RotatingText
									texts={["React", "Bits", "Is", "Cool!"]}
									mainClassName="bg-cyan-300 text-black overflow-hidden"
									staggerFrom={"last"}
									initial={{ y: "100%" }}
									animate={{ y: 0 }}
									exit={{ y: "-120%" }}
									staggerDuration={0.025}
									splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
									transition={{ type: "spring", damping: 30, stiffness: 400 }}
									rotationInterval={2000}
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
						<div className="absolute left-0 bottom-8 -z-[2]">
							<ScrollVelocity
								texts={marqueeText.text1}
								velocity={30}
								className="text-[rgba(255,255,255,0.1)] animate-blur-1"
							/>
							<ScrollVelocity
								texts={marqueeText.text2}
								velocity={30}
								className="text-[rgba(255,255,255,0.1)] animate-blur-2"
							/>
							<ScrollVelocity
								texts={marqueeText.text3}
								velocity={30}
								className="text-[rgba(255,255,255,0.1)] animate-blur-3"
							/>
							<ScrollVelocity
								texts={marqueeText.text4}
								velocity={30}
								className="text-[rgba(255,255,255,0.1)] animate-blur-4"
							/>
							<ScrollVelocity
								texts={marqueeText.text5}
								velocity={30}
								className="text-[rgba(255,255,255,0.1)] animate-blur-5"
							/>
						</div>
					</div>
				</BackgroundBeamsWithCollision>
			</div>
		</>
	);
}
