// import { motion } from "motion/react";
import { Link } from "react-router";
import Container from "../Layout/Container";
import Logo from "../SVG/Logo";

const Navbar = () => {
	return (
		<div className="py-3 scroll-smooth bg-black text-white fixed z-[99999] w-full ">
			<Container>
				<div
					initial={{ opacity: 0, y: -100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.3,
						delay: 0,
						type: "spring",
						stiffness: 80,
						damping: 20,
					}}
					className="flex justify-between  items-center"
				>
					<div className="">
						<Link to={"/"}>
							<Logo></Logo>
						</Link>
					</div>
					<div className="flex justify-between items-center">
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
							<a href="#">
								<button class="relative inline-block p-px ml-12 font-medium leading-6 font-secondary text-lg text-white no-underline bg-gray-950 shadow-2xl cursor-pointer group rounded-xl shadow-zinc-900">
									<span class="absolute inset-0 overflow-hidden rounded-xl">
										<span class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
									</span>
									<div class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-xl bg-gray-950/50 ring-1 ring-white/10 ">
										<span>Contact</span>
									</div>
									<span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
								</button>
							</a>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
