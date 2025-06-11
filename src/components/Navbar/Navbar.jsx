import { motion } from "motion/react";
import { Link } from "react-router";
import Container from "../Layout/Container";
import Logo from "../SVG/Logo";

const Navbar = () => {
	return (
		<div className="py-3 scroll-smooth bg-black text-white fixed z-[99999] w-full ">
			<Container>
				<motion.div initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.3,
								delay: 0.,
								type: "spring",
								stiffness: 80,
								damping: 20,
							}} className="flex justify-between  items-center">
					<div className="">
						<Link to={"/"}>
							<Logo></Logo>
						</Link>
					</div>
					<div className="flex justify-between items-center">
						<ul
						
							className="flex font-secondary text-lg gap-x-15"
						>
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
						<div
						
						>
							<a href="#">
								<p class="bg-neutral-950 text-neutral-10000 border border-neutral-400 border-b-3 font-medium overflow-hidden relative px-8 py-[9px] rounded-lg hover:brightness-150   ml-12 active:opacity-75 font-secondary text-lg outline-none duration-300 group">
									<span class="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] "></span>
									Contact
								</p>
							</a>
						</div>
					</div>
				</motion.div>
			</Container>
		</div>
	);
};

export default Navbar;

