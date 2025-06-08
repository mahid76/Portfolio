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
			className="absolute top-1/2 transform right-4 w-[380px] items-center -translate-y-1/2 flex justify-between "
		>
			<motion.h1
				initial={{ rotate: 0, letterSpacing: "0" }}
				animate={{ rotate: -90, letterSpacing: "0.1em" }}
				transition={{ duration: 0.8, delay: 2 }}
				className="text-white text-5xl font-primary tracking-widest  "
			>
				My Skills
			</motion.h1>
			<div className="  items-end   flex flex-col  gap-6 ">
			
				{skills.map((item, index) => (
					<div
						key={index}
						className="group flex items-center  bg-gray-100 rounded-full shadow overflow-hidden transition-all duration-300 ease-in-out w-15 hover:w-45 cursor-pointer"
					>
						<div className="flex gap-2 items-center  ">
								
							<div className="  text-6xl text-black-600">{item.icon}</div>
							<h3 className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 whitespace-nowrap text-black font-medium">
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
