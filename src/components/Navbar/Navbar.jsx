import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";
import { Link } from "react-router";
import Container from "../Layout/Container";
import Logo from "../SVG/Logo";

const Navbar = () => {
	const [show, setShow] =useState(false)
	const handleClick = ()=>{
		setShow(true)
	}
	return (
		<div className="py-3 scroll-smooth bg-black text-white fixed z-[99999] w-full ">
			<Container>
				<div className="md:flex justify-between  items-center">
					<div className="flex justify-between items-center" >
						<Link to={"/"}>
							<Logo></Logo>
						</Link>
							<div>
								<FaBars onClick={handleClick} className=" block md:hidden text-2xl text-white cursor-pointer" />
							</div>
					</div>
					<div className=" hidden  md:flex md:flex-row flex-col  md:justify-between items-center mt-7 md:mt-0 ">
						<ul className="flex items-center md:flex-row flex-col font-secondary text-lg gap-x-15 md:gap-y-0 gap-y-2 ">
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
						<div className="flex justify-center  ">
							<Link to={"/Contact"}>
								<p class="relative  p-px mt-4 md:mt-0  md:ml-12 font-medium leading-6 font-secondary text-lg text-white no-underline bg-gray-950 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
									<span class="absolute inset-0 overflow-hidden rounded-xl">
										<span class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
									</span>
									<div class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
										<span>Contact</span>
									</div>
									<span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
								</p>
							</Link>
						</div>
					</div>
				</div>
			</Container>
			{
				show &&
				<div className=" relative  md:flex md:flex-row flex-col  md:justify-between items-center mt-7 md:mt-0 ">
						<ul className="flex items-center md:flex-row flex-col font-secondary text-lg gap-x-15 md:gap-y-0 gap-y-2 ">
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
						<div className="flex justify-center  ">
							<Link to={"/Contact"}>
								<p class="relative  p-px mt-4 md:mt-0  md:ml-12 font-medium leading-6 font-secondary text-lg text-white no-underline bg-gray-950 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
									<span class="absolute inset-0 overflow-hidden rounded-xl">
										<span class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
									</span>
									<div class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
										<span>Contact</span>
									</div>
									<span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
								</p>
							</Link>
						</div>
						<GiCrossedBones onClick={()=>setShow(false)} className="block absolute top-[-54px] right-5 bg-black md:hidden text-2xl text-white cursor-pointer" />
					</div>
			}
		</div>
	);
};

export default Navbar;
