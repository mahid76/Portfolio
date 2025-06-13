// import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import Container from "../Layout/Container";
import Logo from "../SVG/Logo";
import { FaBars } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";


const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleClick = () => {
		setShow(true);
	};
	return (
		<div className="py-3 scroll-smooth bg-black text-white fixed z-[99999] w-full ">
			<Container>
				<div className="md:flex justify-between  items-center">
					<div className="">
						<Link to={"/"}>
							<Logo></Logo>
							<div >
						<FaBars onClick={handleClick} className=" block md:hidden text-2xl text-white cursor-pointer" />

					</div>
						</Link>
					</div>
					<div className="md:flex justify-between items-center">
						<ul className="flex font-secondary text-lg gap-x-15">
							<Link to={"/"} className="relative group">
								<li>Home</li>
								<div className="absolute -left-3 group-hover:h-full group-hover:w-[2px] ease-in-out  duration-250 top-1/2 transform -translate-y-1/2  h-[2px] w-[0px] bg-white"></div>
							</Link>
							<Link to={"/AboutMe"} className="relative group">
								<li>About & Skills</li>
								<div className="absolute -left-3 group-hover:h-full group-hover:w-[2px] ease-in-out  duration-250 top-1/2 transform -translate-y-1/2  h-[2px] w-[0px] bg-white"></div>
							</Link>

							<Link to={"/Projects"} className="relative group">
								<li>Projects</li>
								<div className="absolute -left-3 group-hover:h-full group-hover:w-[2px] ease-in-out  duration-250 top-1/2 transform -translate-y-1/2  h-[2px] w-[0px] bg-white"></div>
							</Link>
						</ul>
						<div>
							<Link to={"/Contact"}>
								<button class="relative inline-block p-px ml-12 font-medium leading-6 font-secondary text-lg text-white no-underline bg-gray-950 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
									<span class="absolute inset-0 overflow-hidden rounded-xl">
										<span class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
									</span>
									<div class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
										<span>Contact</span>
									</div>
									<span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</Container>
				{
				show &&
				<div className="bg-primary relative  w-full py-15 px-15">
					<ul className="hidden flex-col md:flex-row md:flex text-white mb-2 md:mt-0 gap-x-[68px]  items-center font-secondary  text-lg font-medium ">
						<li className="mt-2 md:mt-0">
							<a href="#">Home</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Features</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Service</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Pages</a>
						</li>
						<li className="mt-2 md:mt-0">
							<a href="#">Blog</a>
						</li>
					</ul>
					<div className="button text-white mb-2 md:mb-0 mt-7 md:mt-0 justify-between md:justify-normal flex md:gap-9 items-center font-secondary text-[16px] md:text-lg font-medium">
						<p>
							<a className="leading-{200%]" href="#">
								Login
							</a>
						</p>
						<p>
							<a
								className="text-headtext py-2 px-4 md:py-5 md:px-[48px] bg-secondary rounded-[4px] md:rounded-[6px] leading-5 font-medium"
								href="#"
							>
								Register
							</a>
						</p>
					</div>
					<GiCrossedBones onClick={()=>setShow(false)} className="block absolute top-[-42px] right-5 bg-primary md:hidden text-2xl text-white cursor-pointer" />
				</div>
			}
		</div>
	);
};

export default Navbar;
