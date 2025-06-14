import "aos/dist/aos.css";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
import mahidPicture from "../../assets/mahidPicture.png";
import Container from "../Layout/Container";
import Navbar from "../Navbar/Navbar";
import Silk from "../ReactBits/Slik";
import SplitText from "../ReactBits/SplitText";
import Line from "../SVG/Line";

const handleAnimationComplete = () => {
	console.log("All letters have animated!");
};

const Home = () => {
	return (
		<ReactLenis root>
			<div className="scroll-smooth">
				<Navbar></Navbar>
				<section className="bg-black relative overflow-hidden  md:before:bg-[#d7d7d7] pt-[195px] md:pt-[150px]  z-[1] before:absolute before:h-full before:w-full md:before:z-[-1] before:z-[2] before:bg-black/50  before:bottom-0 before:right-0 md:before:top-0 md:before:left-0 z- before:[clip-path:polygon(0%_75%,100%_55%,100%_100%,0_100%)]  md:before:[clip-path:polygon(0_0,56%_0,42%_100%,0_100%)] ">
					<div className="absolute top-0 left-0  w-full h-full z-[-10]">
						<Silk
							speed={5}
							scale={1}
							color="#242323"
							noiseIntensity={1.5}
							rotation={0}
						/>
					</div>
					<Container>
						<div className=" relative flex justify-end items-end   md:justify-between md:items-center">
							<div className=" ">
								<div className="title md:static absolute bottom-11 left-0 z-[10] md:z-0">
									<h4 className="">
										<SplitText
											text="Hi, i am"
											className="tracking-widest md:text-[35px] md:text-black font-bold font-secondary text-white text-[16px] md:text-center"
											delay={800}
											duration={3}
											ease="power3.out"
											splitType="lines"
											from={{ opacity: 0, y: 40 }}
											to={{ opacity: 1, y: 0 }}
											threshold={0.1}
											rootMargin="-100px"
											textAlign="center"
											onLetterAnimationComplete={handleAnimationComplete}
										/>
									</h4>
									<h2 className=" ">
										<SplitText
											text="Md. Mahidul Islam"
											className="tracking-wider font-bold font-primary md:leading-20 md:text-black md:text-[65px] md:mt-[30px] text-white text-[26px]  md:text-center"
											delay={800}
											duration={3}
											ease="power3.out"
											splitType="lines"
											from={{ opacity: 0, y: 40 }}
											to={{ opacity: 1, y: 0 }}
											threshold={0.1}
											rootMargin="-100px"
											textAlign="center"
											onLetterAnimationComplete={handleAnimationComplete}
										/>
									</h2>
									<p className="">
										<SplitText
											text="Front-end Developer"
											className="tracking-wider font-secondary md:mt-3 md:text-2xl text-sm text-[#909090] font-bold"
											delay={800}
											duration={3}
											ease="power3.out"
											splitType="lines"
											from={{ opacity: 0, y: 40 }}
											to={{ opacity: 1, y: 0 }}
											threshold={0.1}
											rootMargin="-10px"
											textAlign="center"
											onLetterAnimationComplete={handleAnimationComplete}
										/>
									</p>
								</div>
								<div className="mt-[100px] hidden  md:static absolute md:flex justify-center">
									<Line></Line>
								</div>
								<div className="flex md:flex-row flex-col  md:mt-[80px] md:static gap-y-3 md:gap-y-0 mb-4 md:justify-between absolute bottom-0 right-0 z-[2] md:z-0">
									<motion.a
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 1, delay: 0.3 }}
										href="mailto:mahidulislamsohan76@gmail.com"
									>
										<MdEmail className="hover:scale-125 duration-200 size-[25px] md:size-[40px] shadow-md px-[2px] md:px-2  text-black  bg-white md:bg-[#c4c4c4] rounded-md  md:rounded-[10px] " />
									</motion.a>
									<motion.a
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 1, delay: 0.4 }}
										href="https://www.linkedin.com/in/md-mahidul-islam-poblaaa/"
									>
										<FaLinkedinIn className="hover:scale-125 duration-200 size-[25px] md:size-[40px] shadow-md px-[2px] md:px-2  text-black  bg-white md:bg-[#c4c4c4] rounded-md  md:rounded-[10px] " />
									</motion.a>
									<motion.a
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 1, delay: 0.5 }}
										href="https://www.facebook.com/jerrypoblaaa"
									>
										<FaFacebook className="hover:scale-125 duration-200 size-[25px] md:size-[40px] shadow-md px-[2px] md:px-2  text-black  bg-white md:bg-[#c4c4c4] rounded-md  md:rounded-[10px] " />
									</motion.a>
									<motion.a
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 1, delay: 0.6 }}
										href="#"
									>
										<IoLogoInstagram className="hover:scale-125 duration-200 size-[25px] md:size-[40px] shadow-md px-[2px] md:px-2  text-black  bg-white md:bg-[#c4c4c4] rounded-md  md:rounded-[10px] " />
									</motion.a>
									<motion.a
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 1, delay: 0.7 }}
										href="tel:+8801601117731"
									>
										<BsWhatsapp className="hover:scale-125 duration-200 size-[25px] md:size-[40px] shadow-md px-[2px] md:px-2  text-black  bg-white md:bg-[#c4c4c4] rounded-md  md:rounded-[10px] " />
									</motion.a>
									<motion.a
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 1, delay: 0.8 }}
										href="https://github.com/mahid76"
									>
										<FaGithub className="hover:scale-125 duration-200 size-[25px] md:size-[40px] shadow-md px-[2px] md:px-2  text-black  bg-white md:bg-[#c4c4c4] rounded-md  md:rounded-[10px] " />
									</motion.a>
									<motion.a
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 1, delay: 0.9 }}
										href="#"
									>
										<FaXTwitter className="hover:scale-125 duration-200 size-[25px] md:size-[40px] shadow-md px-[2px] md:px-2  text-black  bg-white md:bg-[#c4c4c4] rounded-md  md:rounded-[10px] " />
									</motion.a>
								</div>
								<div className="flex justify-center md:static  md:mt-[80px]  bottom-3 left-0 z-[2] absolute">
									<a href="../../assets/resume-of-mahidul-islam.pdf" download>
										<p className="overflow-hidden text-[12px] md:text-sm font-bold  text-black bg-white md:bg-transparent rounded-lg md:rounded-2xl py-1 md:py-3 px-5 md:px-[34px] md:border-x border-x-black relative group hover:text-white z-10 font-secondary duration-[400ms] ease-in-out">
											My CV
											<div className="w-0 h-0 bg-black absolute left-0 top-0 duration-[350ms] ease-in-out rounded-t-none rounded-l-none rounded-br-[100%]   group-hover:w-[100%] -z-10 group-hover:h-[100%]  "></div>
											<div className="w-0 h-0 bg-black absolute right-0 bottom-0 duration-[450ms] ease-in-out rounded-tl-[180%] rounded-r-none rounded-b-none   group-hover:w-[100%] -z-10 group-hover:h-[100%]"></div>
										</p>
									</a>
								</div>
							</div>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 0.3 }}
								className="md:z-[1]  "
							>
								<img
									className="z-20 transform  translate-x-20 md:translate-x-0 object-contain md:object-fill  max-h-[808px]  "
									src={mahidPicture}
									alt=""
								/>
							</motion.div>
						</div>
					</Container>
				</section>
				<div className="bg-black py-14">
					<Container>
						<div className="' max-w-[772px] ">
							<motion.p
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: 0.3 }}
								className="font-bold text-lg md:text-[30px]  text-white tracking-[20.54%] font-primary  "
							>
								"Let’s Build Something Great"
							</motion.p>
							<motion.p
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, delay: 0.3 }}
								className="font-secondary tracking-wide text-[12px]
								  md:text-[15px]   text-white md:leading-[155.7%] mt-4 md:mt-9 "
							>
								If you're looking for a developer who cares as much about design
								as they do about functionality, let's connect. Whether you have
								a startup idea or need help polishing your existing site, I’m
								ready to help.
							</motion.p>

							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 1, delay: 0.3 }}
								className="flex  mt-5 md:mt-[60px]"
							>
								<Link to={"/AboutMe"}>
									<p className="overflow-hidden text-sm font-bold  text-white bg-none rounded-2xl md:py-3 py-2 px-8 md:px-[34px] border-x border-x-white relative group hover:text-black z-10  duration-[400ms] ease-in-out">
										About Me
										<div className="w-0 h-0 bg-white absolute left-0 top-0 duration-[350ms] ease-in-out rounded-t-none rounded-l-none rounded-br-[100%]   group-hover:w-[100%] -z-10 group-hover:h-[100%]  "></div>
										<div className="w-0 h-0 bg-white absolute right-0 bottom-0 duration-[450ms] ease-in-out rounded-tl-[180%] rounded-r-none rounded-b-none   group-hover:w-[100%] -z-10 group-hover:h-[100%]"></div>
									</p>
								</Link>
							</motion.div>
						</div>
					</Container>
				</div>
			</div>
		</ReactLenis>
	);
};

export default Home;
