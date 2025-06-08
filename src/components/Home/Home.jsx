import "aos/dist/aos.css";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import {
	FaSquareInstagram,
	FaSquareWhatsapp,
	FaSquareXTwitter,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import mahidPicture from "../../assets/mahidPicture.png";
import Container from "../Layout/Container";
import Navbar from "../Navbar/Navbar";
import Silk from "../ReactBits/Slik";
import SplitText from "../ReactBits/SplitText";
import Line from "../SVG/Line";
import { Link } from "react-router";

const handleAnimationComplete = () => {
	console.log("All letters have animated!");
};

const Home = () => {
	return (
		<ReactLenis root>
			<div className="scroll-smooth">
				<Navbar></Navbar>
				<section className="bg-black  relative overflow-hidden  before:bg-[#d7d7d7]  pt-[150px]  z-[1] before:absolute before:h-[100%] before:w-[100%] before:z-[-1] before:top-0 before:left-0 z- before:[clip-path:polygon(0_0,56%_0,42%_100%,0_100%)] ">
					<div className="absolute top-0 left-0 bg-black w-full h-full z-[-10]">
						<Silk
							speed={5}
							scale={1}
							color="#242323"
							noiseIntensity={1.5}
							rotation={0}
						/>
					</div>
					<Container>
						<div className="my-auto  flex justify-between items-center">
							<div className="">
								<div className="title">
									<h4 className="">
										<SplitText
											text="Hi, i am"
											className="tracking-widest text-[35px] text-black font-bold font-secondary  text-center"
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
											className="tracking-wider font-bold font-primary leading-20 text-black text-[65px] mt-[30px]  text-center"
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
									<p className="tracking-wider font-secondary mt-3 text-2xl text-[#909090] font-bold">
										<SplitText
											text="Front-end Developer"
											className="tracking-wider font-secondary  text-2xl text-[#909090] font-bold text-center"
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
									</p>
								</div>
								<div className="mt-[100px] flex justify-center">
									<Line></Line>
								</div>
								<div className="flex mt-[80px] justify-between">
									<a href="mailto:mahidulislamsohan76@gmail.com">
										<IoMail className="hover:scale-125 duration-200 size-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.25)] px-2  text-black bg-[#c4c4c4] rounded-[10px] " />
									</a>
									<a href="https://www.linkedin.com/in/md-mahidul-islam-poblaaa/">
										<FaLinkedin className="hover:scale-125 duration-200 size-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.25)] px-2  text-black bg-[#c4c4c4] rounded-[10px] " />
									</a>
									<a href="https://www.facebook.com/jerrypoblaaa">
										<FaFacebook className="hover:scale-125 duration-200 size-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.25)] px-2  text-black bg-[#c4c4c4] rounded-[10px] " />
									</a>
									<a href="#">
										<FaSquareInstagram className="hover:scale-125 duration-200 size-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.25)] px-2  text-black bg-[#c4c4c4] rounded-[10px] " />
									</a>
									<a href="tel:+8801601117731">
										<FaSquareWhatsapp className="hover:scale-125 duration-200 size-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.25)] px-2  text-black bg-[#c4c4c4] rounded-[10px] " />
									</a>
									<a href="https://github.com/mahid76">
										<FaGithub className="hover:scale-125 duration-200 size-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.25)] px-2  text-black bg-[#c4c4c4] rounded-[10px] " />
									</a>
									<a href="#">
										<FaSquareXTwitter className="hover:scale-125 duration-200 size-[40px] shadow-[0_8px_30px_rgb(0,0,0,0.25)] px-2  text-black bg-[#c4c4c4] rounded-[10px] " />
									</a>
								</div>
								<div className="flex justify-center mt-[80px]">
									<a href="#">
										<p className="overflow-hidden text-sm font-bold  text-black bg-none rounded-2xl py-3 px-[34px] border-x border-x-black relative group hover:text-white z-10  duration-[400ms] ease-in-out">
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
								className="z-[99]"
							>
								<img className="h-[808px]" src={mahidPicture} alt="" />
							</motion.div>
						</div>
					</Container>

					<div className="bg-black about  bottom-0 left-0  py-14">
						<Container>
							<div className="' max-w-[772px] ">
								<SplitText
									text={`"Let’s Build Something Great"`}
									className="font-bold text-[30px]  text-white tracking-[20.54%] font-primary  "
									delay={800}
									duration={3}
									ease="power3.out"
									splitType="lines"
									from={{ opacity: 0, y: 40 }}
									to={{ opacity: 1, y: 0 }}
									threshold={0.1}
									rootMargin="150px"
									textAlign="center"
									onLetterAnimationComplete={handleAnimationComplete}
								/>

								<SplitText
									text={`	If you're looking for a developer who cares as much about design
								as they do about functionality, let's connect. Whether you have
								a startup idea or need help polishing your existing site, I’m
								ready to help.`}
									className="font-secondary tracking-wide text-[15px] text-white leading-[155.7%] mt-9 "
									delay={100}
									duration={3}
									ease="power3.out"
									splitType="lines"
									from={{ opacity: 0, y: 40 }}
									to={{ opacity: 1, y: 0 }}
									threshold={0.1}
									rootMargin="150px"
									textAlign="center"
									onLetterAnimationComplete={handleAnimationComplete}
								/>
								<p></p>
								<div className="flex  mt-[60px]">
									<Link to={"/AboutMe"} >
										<p className="overflow-hidden text-sm font-bold  text-white bg-none rounded-2xl py-3 px-[34px] border-x border-x-white relative group hover:text-black z-10  duration-[400ms] ease-in-out">
											About Me
											<div className="w-0 h-0 bg-white absolute left-0 top-0 duration-[350ms] ease-in-out rounded-t-none rounded-l-none rounded-br-[100%]   group-hover:w-[100%] -z-10 group-hover:h-[100%]  "></div>
											<div className="w-0 h-0 bg-white absolute right-0 bottom-0 duration-[450ms] ease-in-out rounded-tl-[180%] rounded-r-none rounded-b-none   group-hover:w-[100%] -z-10 group-hover:h-[100%]"></div>
										</p>
									</Link>
								</div>
							</div>
						</Container>
					</div>
				</section>
			</div>
		</ReactLenis>
	);
};

export default Home;
