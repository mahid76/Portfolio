import { ReactLenis } from "lenis/react";
import Container from "../Layout/Container";
import Navbar from "../Navbar/Navbar";
import Aurora from "../ReactBits/Aurora";

const Projects = () => {
	return (
		<ReactLenis root>
			<div>
				<section>
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
					<Container>
						<div className="pt-[150px] text-center">
							<h2 className="text-white text-5xl">Projects</h2>
							<p className="text-white text-2xl mt-8 max-w-[600px] mx-auto">I have worked on a variety of web development projects, ranging from responsive websites for small businesses to complex front-end interfaces.</p>
						</div>
					</Container>
				</section>
			</div>
		</ReactLenis>
	);
};

export default Projects;
