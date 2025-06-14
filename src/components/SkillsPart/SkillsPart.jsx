import { motion } from "motion/react";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const skills = [
	{
		skill: "HTML5",
		icon: <IoLogoHtml5 />,
	},
	{
		skill: "CSS3",
		icon: <FaCss3Alt />,
	},
	{
		skill: "Bootstrap",
		icon: <FaBootstrap />,
	},
	{
		skill: "TailwindCSS",
		icon: <RiTailwindCssFill />,
	},
	{
		skill: "JavaScript",
		icon: <IoLogoJavascript />,
	},
	{
		skill: "ReactJS",
		icon: <GrReactjs />,
	},
	{
		skill: "NestJS",
		icon: <RiNextjsFill />,
	},
];

const SkillsPart = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, delay: 0.3 }}
			className="md:absolute mt-10 md:mt-0  md:top-1/2 transform md:right-4 md:w-[380px]  items-center md:-translate-y-1/2 flex md:flex-row flex-col  md:justify-between "
		>
			<motion.h1
				initial={{ rotate: 0, letterSpacing: "0" }}
				animate={{ rotate: window.innerWidth < 600 ?0: -90, letterSpacing: "0.1em" }}
				transition={{ duration: 0.8, delay: 2 }}
				className="text-white text-2xl md:text-5xl font-primary tracking-widest  "
			>
				My Skills
			</motion.h1>
			<div className=" px-5  md:px-0 mt-4 md:mt-0 items-end flex-wrap  flex md:flex-col gap-3 md:gap-6 justify-between md:justify-normal ">
			
				{skills.map((item, index) => (
					<div
						key={index}
						className="group flex  md:justify-normal items-center justify-center bg-gray-100 rounded-full shadow md:overflow-hidden transition-all duration-300 ease-in-out  w-35 md:w-15 md:hover:w-45 cursor-pointer"
					>
						<div className="flex md:gap-2 items-center  ">
								
							<div className=" text-lg md:text-6xl text-black-600">{item.icon}</div>
							<h3 className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-secondary ml-1 md:ml-2 whitespace-nowrap text-black text-[13px] md:text-[16px] font-extralight md:font-medium">
								{item.skill}
							</h3>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default SkillsPart;
