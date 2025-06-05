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

	return (
		<div className="py-5 bg-black text-white ">
			<Container>
				<div className="flex justify-between items-center">
					<div className="">
						<a href="#">
							<Logo></Logo>
						</a>
					</div>
					<div className="flex justify-between items-center">
						<ul className="flex gap-x-15">
							<a className="relative group" href="#">
								<li>Home</li>
								<div className="absolute -left-3 group-hover:h-full group-hover:w-[2px] ease-in-out  duration-250 top-1/2 transform -translate-y-1/2  h-[2px] w-[0px] bg-white"></div>
							</a>
							<a className="relative group" href="#">
								<li>About me</li>
								<div className="absolute -left-3 group-hover:h-full group-hover:w-[2px] ease-in-out  duration-250 top-1/2 transform -translate-y-1/2  h-[2px] w-[0px] bg-white"></div>
							</a>
							<a className="relative group" href="#">
								<li>Skills</li>
								<div className="absolute -left-3 group-hover:h-full group-hover:w-[2px] ease-in-out  duration-250 top-1/2 transform -translate-y-1/2  h-[2px] w-[0px] bg-white"></div>
							</a>
							<a className="relative group" href="#">
								<li>Portfolio</li>
								<div className="absolute -left-3 group-hover:h-full group-hover:w-[2px] ease-in-out  duration-250 top-1/2 transform -translate-y-1/2  h-[2px] w-[0px] bg-white"></div>
							</a>
						</ul>
						<div>
							<a href="#">
								<p className="px-[32px] py-[10px] ml-12 border border-[#2c2c2c] bg-[#1a1a1a] text-white text-lg font-secondary rounded-[30px]   ">
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
