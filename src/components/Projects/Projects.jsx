import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { BiRightTopArrowCircle } from "react-icons/bi";
import agenc from "../../assets/agenc.jpg";
import cleaning from "../../assets/cleaning.jpg";
import innovate from "../../assets/innovate.jpg";
import Container from "../Layout/Container";
import Navbar from "../Navbar/Navbar";
import Aurora from "../ReactBits/Aurora";
import BlurText from "../ReactBits/BlurText";
import TiltedCard from "../ReactBits/TiltedCard";

const blurAnimationComplete = () => {
	console.log("Animation completed!");
};

const Projects = () => {
	const projects = [
		{
			name: "Innovate",
			year: "Mar2025",
			align: "right",
			link: "https://innovate-react-01-git-main-md-mahidul-islams-projects.vercel.app/",
			code: "https://github.com/mahid76/Innovate_React_01",
			image: innovate,
		},
		{
			name: "Agenc",
			year: "Jan2025",
			align: "left",
			link: "https://mahid76.github.io/Agenc_Project02_CIT/",
			code: "https://github.com/mahid76/Agenc_Project02_CIT",
			image: agenc,
		},
		{
			name: "Cleaning",
			year: "Feb2025",
			align: "right",
			link: "https://mahid76.github.io/Cleaning_Project01_CIT/",
			code: "https://github.com/mahid76/Cleaning_Project01_CIT",
			image: cleaning,
		},
		{
			name: "Portfolio",
			year: "Apr2025",
			align: "left",
			link: "#",
			code: "https://github.com/mahid76",
			image: agenc,
		},
	];
	return (
		<ReactLenis root>
			<div className="">
				<section className="relative">
					<div
						className="bg-black absolute top-0 left-0 w-full h-full"
						style={{ width: "100%", position: "absolute" }}
					>
						<Aurora
							colorStops={["#000000", "#ffffff", "#000000"]}
							blend={0.7}
							amplitude={0.5}
							speed={0.1}
						/>
					</div>
					<Navbar></Navbar>
					<Container>
						<div className="py-[140px] text-center">
							<div className="flex justify-center flex-col">
								<BlurText
									text="Projects"
									delay={150}
									animateBy="words"
									direction="top"
									onAnimationComplete={blurAnimationComplete}
									className="tracking-wider font-bold font-primary leading-20 text-4xl    text-white max-w-[600px] mx-auto"
								/>
								<BlurText
									text="I have worked on a variety of web development projects, ranging from responsive websites for small businesses to
									complex front-end interfaces."
									delay={30}
									animateBy="words"
									direction="top"
									onAnimationComplete={blurAnimationComplete}
									className="text-[#d5d3d3] tracking-wide font-secondary  text-[18px]  font-medium mt-6 max-w-[600px] mx-auto"
								/>
							</div>
							<div className="all">
								{projects.map((item) => (
									<div
										className={`flex w-full mt-20 sm:flex-col-reverse items-center gap-15 ${
											item.align === "left"
												? "md:flex-row"
												: "md:flex-row-reverse"
										} justify-end `}
									>
										<motion.div
											initial={{
												opacity: 0,
												x: item.align === "right" ? -100 : 100,
											}}
											whileInView={{
												opacity: 1,
												x: 0,
												transition: { duration: 0.8, delay: 0.5 },
											}}
										>
											<h2 className="text-white font-medium tracking-wider font-primary sm:text-2xl ">
												{item.name}
											</h2>
											<p
												className={`text-white  tracking-wide font-secondary ${
													item.align === "left"
														? "md:text-right"
														: "md:text-left"
												}`}
											>
												{item.year}
											</p>
											<a
												target="_blank"
												href={item.link}
												className={`text-lg gap-2 font-secondary tracking-wide flex items-center text-cyan-300 opacity-80 hover:opacity-100
											 transition-all duration-500 cursor-pointer sm:justify-self-center ${
													item.align === "left"
														? "md:justify-self-end"
														: "md:justify-self-start"
												}`}
											>
												Live
												<BiRightTopArrowCircle />
											</a>
											<a
												target="_blank"
												href={item.code}
												className={`text-lg gap-2 font-secondary tracking-wide flex items-center text-cyan-300  opacity-80 hover:opacity-100
											 transition-all duration-500 cursor-pointer sm:justify-self-center ${
													item.align === "left"
														? "md:justify-self-end"
														: "md:justify-self-start"
												}`}
											>
												Code
												<BiRightTopArrowCircle />
											</a>
										</motion.div>

										<motion.a
											initial={{
												opacity: 0,
												x: item.align === "right" ? -100 : 100,
											}}
											whileInView={{
												opacity: 1,
												x: 0,
												transition: { duration: 0.8, delay: 0.5 },
											}}
											target="_blank"
											href={item.link}
										>
											<TiltedCard
												imageSrc={item.image}
												altText="projects"
												captionText="Live"
												containerHeight="220px"
												containerWidth="400px"
												imageHeight="220px"
												imageWidth="400px"
												rotateAmplitude={12}
												scaleOnHover={1.1}
												showMobileWarning={false}
												showTooltip={true}
												displayOverlayContent={true}
												overlayContent={
													<p className="tilted-card-demo-text"></p>
												}
											/>
										</motion.a>
									</div>
								))}
							</div>
						</div>
					</Container>
				</section>
			</div>
		</ReactLenis>
	);
};

export default Projects;
