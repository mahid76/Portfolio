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
import Line from "../SVG/Line";

const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<section className="bg-black relative before:bg-[#d7d7d7]  pt-[30px]  z-[1] before:absolute before:h-[100%] before:w-[100%] before:z-[-1] before:top-0 before:left-0 before:[clip-path:polygon(0_0,56%_0,42%_100%,0_100%)]">
				<Container>
					<div className="flex justify-between items-center">
						<div className="">
							<div className="title">
								<h4 className="text-[35px] text-black font-bold font-secondary ">
									Hi, I am
								</h4>
								<h2 className="tracking-wider font-bold font-primary leading-20 text-black text-[65px] mt-[30px] ">
									Md. Mahidul Islam
								</h2>
								<p className="font-secondary mt-3 text-2xl text-[#909090] font-bold">
									Front-end Developer
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
						<div className="  ">
							<img className="h-[877px]" src={mahidPicture} alt="" />
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
};

export default Home;
