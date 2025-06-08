// import { useState } from "react";
import { Link } from "react-router";
import Container from "../Layout/Container";
import Logo from "../SVG/Logo";

const Navbar = () => {
	// const navData = [
	//   {
	//     title: "",
	//   },
	//   {
	//     title: "About me",
	//   },
	//   {
	//     title: "Skills",
	//   },
	//   {
	//     title: "Portfolio",
	//   }
	// ]

	// const [open, setOpen] = useState(false);

	return (
		<div className="py-3 scroll-smooth bg-black text-white fixed z-[99999] w-full ">
			<Container>
				<div className="flex justify-between  items-center">
					<div className="">
						<a href="#">
							<Logo></Logo>
						</a>
					</div>
					<div className="flex justify-between items-center">
						<ul className="flex font-secondary text-lg gap-x-15">
							<Link to={"/"} className="relative group"  >
								<li>Home</li>
								<div className="absolute -left-3 group-hover:h-full group-hover:w-[2px] ease-in-out  duration-250 top-1/2 transform -translate-y-1/2  h-[2px] w-[0px] bg-white"></div>
							</Link>
							<Link
								to={"/AboutMe"}
								// onClick={() => setOpen(true)}
								className="relative group"
							>
								<li>About me</li>
								<div className="absolute -left-3 group-hover:h-full group-hover:w-[2px] ease-in-out  duration-250 top-1/2 transform -translate-y-1/2  h-[2px] w-[0px] bg-white"></div>
							</Link>

							{/* <Link  className="relative group"  >
								<li>Skills</li>
								<div className="absolute -left-3 group-hover:h-full group-hover:w-[2px] ease-in-out  duration-250 top-1/2 transform -translate-y-1/2  h-[2px] w-[0px] bg-white"></div>
							</Link> */}
							<Link  className="relative group"  >
								<li>Portfolio</li>
								<div className="absolute -left-3 group-hover:h-full group-hover:w-[2px] ease-in-out  duration-250 top-1/2 transform -translate-y-1/2  h-[2px] w-[0px] bg-white"></div>
							</Link>
						</ul>
						<div>
							<a href="#">
								<p class="bg-neutral-950 text-neutral-10000 border border-neutral-400 border-b-3 font-medium overflow-hidden relative px-8 py-[9px] rounded-lg hover:brightness-150   ml-12 active:opacity-75 font-secondary text-lg outline-none duration-300 group">
									<span class="bg-neutral-400 shadow-neutral-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] "></span>
									Contact
								</p>
							</a>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;

// <div className="block ">
// 	<Modal open={open} onClose={() => setOpen(false)}>
// 		<div className="pt-7  flex flex-col justify-center px-4">
// 			<h2 className="tracking-wider font-bold font-primary leading-20 text-4xl  text-black">About Mahidul</h2>
// 		<div className="max-w-[470px] text-justify">

// 			<p className="text-[#7b7a7a] tracking-wide font-secondary  text-[15px]  font-medium">
// 			Growing up, I was always curious about how things
// 			worked—especially on screens. That curiosity led me into the world
// 			of web development, where creativity meets logic. As I explored
// 			more, I realized that crafting interfaces wasn't just about how
// 			things look, but how they feel. That’s where I found my passion:
// 			front-end development.
// 		</p>
// 		<p className="text-[#7b7a7a] tracking-wide font-secondary my-4 text-[15px]  font-medium">
// 			Over the years, I’ve been refining my skills in building
// 			responsive, accessible, and visually engaging websites. I enjoy
// 			transforming designs into real products using modern tools like
// 			React, Tailwind CSS, and GSAP, while also caring deeply about
// 			performance and user experience.
// 		</p>
// 		<p className="text-[#7b7a7a] tracking-wide font-secondary  text-[15px]  font-medium">
// 			What drives me most is the challenge of turning ideas into
// 			reality, pixel by pixel. Whether it's building a personal site,
// 			contributing to open-source, or collaborating with a team—I bring
// 			a strong eye for detail, a love for clean code, and a desire to
// 			constantly improve.
// 		</p>
// 		<div className="mt-8   ">
// 			<img  className=" w-[120px]" src={Mysign} alt="mySign" />
// 		</div>
// 		</div>

// 		</div>
// 	</Modal>
// </div>
