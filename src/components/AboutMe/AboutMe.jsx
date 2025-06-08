import { ReactLenis } from "lenis/react";
import Container from "../Layout/Container";
import Navbar from "../Navbar/Navbar";
import Aurora from "../ReactBits/Aurora";

const AboutMe = () => {
	return (
		<ReactLenis root>
			<div className="scroll-smooth">
				<div
					className="bg-black h-dvh"
					style={{ width: "100%", position: "absolute" }}
				>
					<Aurora
						colorStops={["#000000", "#ffffff", "#000000"]}
						blend={0.7}
						amplitude={0.5}
						speed={0.1}
					/>
				</div>
				<Navbar></Navbar>
				<section className="   h-screen flex items-center  ">
					<Container>
						<div className="">
              <div

							data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration=""
							className="  flex flex-col justify-center px-4"
						>
							<h2 className="tracking-wider font-bold font-primary leading-20 text-4xl  text-white">
								About Mahidul
							</h2>
							<div className="max-w-[1000px] text-justify">
								<p className="text-[#b3b0b0] tracking-wide font-secondary  text-[18px]  font-medium">
									Growing up, I was always curious about how things
									worked—especially on screens. That curiosity led me into the
									world of web development, where creativity meets logic. As I
									explored more, I realized that crafting interfaces wasn't just
									about how things look, but how they feel. That’s where I found
									my passion: front-end development.
								</p>
								<p className="text-[#b3b0b0] tracking-wide font-secondary my-4 text-[18px]  font-medium">
									Over the years, I’ve been refining my skills in building
									responsive, accessible, and visually engaging websites. I
									enjoy transforming designs into real products using modern
									tools like React, Tailwind CSS, and GSAP, while also caring
									deeply about performance and user experience.
								</p>
								<p className="text-[#b3b0b0] tracking-wide font-secondary  text-[18px]  font-medium">
									What drives me most is the challenge of turning ideas into
									reality, pixel by pixel. Whether it's building a personal
									site, contributing to open-source, or collaborating with a
									team—I bring a strong eye for detail, a love for clean code,
									and a desire to constantly improve.
								</p>
							</div>
						</div>
            </div>
					</Container>
          <div className="z-10"> 
            <ul className="text-white text-5xl">
             <h1 className="text-white text-5xl">hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
             <h1>hi</h1>
            </ul>
          </div>
				</section>
			</div>
		</ReactLenis>
	);
};

export default AboutMe;
