import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import {
	FaSquareInstagram,
	FaSquareWhatsapp,
	FaSquareXTwitter,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import mahidPicture from "../../assets/mahidPicture.png";
import Bio from "../Bio/Bio";
import Container from "../Layout/Container";
import Navbar from "../Navbar/Navbar";
import AnimatedContent from "../ReactBits/AnimatedContent";
import Silk from "../ReactBits/Slik";
import SplitText from "../ReactBits/SplitText";
import Line from "../SVG/Line";



const handleAnimationComplete = () => {
	console.log("All letters have animated!");
};
AOS.init();

const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<section className="bg-black relative before:bg-[#d7d7d7]  pt-[30px]  z-[1] before:absolute before:h-[100%] before:w-[100%] before:z-[-1] before:top-0 before:left-0 before:[clip-path:polygon(0_0,56%_0,42%_100%,0_100%)]">
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
					<div className="flex justify-between items-center">
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
						<div>
							<AnimatedContent
								distance={100}
								direction="horizontal"
								reverse={false}
								duration={3}
								ease="power3.out"
								initialOpacity={0}
								animateOpacity
								scale={1}
								threshold={0.1}
								delay={0.2}
							>
								<div>
									<img className="h-[877px]" src={mahidPicture} alt="" />
								</div>
							</AnimatedContent>
						</div>
					</div>
				</Container>
			</section>
			<Bio></Bio>
		</div>
	);
};

export default Home;
