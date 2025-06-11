import { ReactLenis } from "lenis/react";
import { BiRightTopArrowCircle } from "react-icons/bi";
import cleaning from "../../assets/cleaning.jpg";
import agenc from "../../assets/agenc.jpg";
import innovate from "../../assets/innovate.jpg";
import Container from "../Layout/Container";
import Navbar from "../Navbar/Navbar";
import Aurora from "../ReactBits/Aurora";
import TiltedCard from "../ReactBits/TiltedCard";
const Projects = () => {
	const projects = [
		{
			name: "Cleaning",
			year: "Jan2025",
			align: "right",
			link: "#",
			code:"https://github.com/mahid76",
			image: agenc,

		},
		{
			name: "Agence",
			year: "Feb2025",
			align: "left",
			link: "#",
			image: cleaning,
		},
		{
			name: "Innovate",
			year: "Mar2025",
			align: "right",
			link: "#",
			image: innovate,
		},
		{
			name: "Portfolio",
			year: "Apr2025",
			align: "left",
			link: "#",
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
							<div>
								<h2 className="tracking-wider font-bold font-primary leading-20 text-4xl  text-white">
									Projects
								</h2>
								<p className="text-[#d5d3d3] tracking-wide font-secondary  text-[18px]  font-medium mt-6 max-w-[600px] mx-auto">
									I have worked on a variety of web development projects,
									ranging from responsive websites for small businesses to
									complex front-end interfaces.
								</p>
							</div>
							<div className="">
								{projects.map((item) => (
									<div
										className={`flex w-full mt-20 sm:flex-col-reverse items-center gap-15 ${
											item.align === "left"
												? "md:flex-row"
												: "md:flex-row-reverse"
										} justify-end `}
									>
										<div>
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
										</div>
										
										{/* <div className=" rounded-xl overflow-hidden hover:scale-110  transform transition-all duration-500 relative  ">
											<div className="w-full h-full opacity-50 bg-black/80 top-0 left-0 hover:opacity-0 absolute transition-all duration-500 md:block sm:hidden"></div>
											
											<div>
												<img
													className="w-full h-full "
													src={item.image}
													alt="projectImage"
												/>
											</div>
										</div> */}
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
													<p className="tilted-card-demo-text">
														
													</p>
												}
											/>
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
