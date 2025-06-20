import { motion } from "motion/react";
import Container from "../Layout/Container";
import Navbar from "../Navbar/Navbar";
import Aurora from "../ReactBits/Aurora";
import BlurText from "../ReactBits/BlurText";

const blurAnimationComplete = () => {
	console.log("Animation completed!");
};

const Contact = () => {
	return (
		<div className=" relative">
			<div
				className="bg-black absolute top-0 left-0 w-full h-full "
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
			<section class=" relative pt-[80px]  md:pt-[120px] pb-8 md:pb-[80px]  text-gray-400">
				<Container>
					<div class=" mb-12 flex justify-center flex-col">
						<BlurText
							text="Let's Connect"
							delay={150}
							animateBy="words"
							direction="top"
							onAnimationComplete={blurAnimationComplete}
							className="tracking-wider font-bold font-primary leading-20 text-3xl md:text-4xl    text-white max-w-[600px] mx-auto"
						/>
						<BlurText
							text="Feel free to reach out to us! Whether you have a question,
								feedback, or a collaboration proposal, we'd love to hear from
								you."
							delay={30}
							animateBy="words"
							direction="top"
							onAnimationComplete={blurAnimationComplete}
							className="text-[#d5d3d3] tracking-wide font-secondary  text-sm md:text-[18px]  font-medium mt-2 md:mt-6 max-w-[600px] mx-auto"
						/>
					</div>
					<motion.form
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						<div className="flex flex-wrap md:flex-nowrap w-full gap-8 md:gap-9  ">
							<div class="relative w-full">
								<input
									type="text"
									id="name"
									name="name"
									class="peer  w-full rounded border border-gray-700 font-secondary bg-gray-800 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
									placeholder="Name"
								/>
								<label
									for="name"
									class="absolute font-primary py-[2px] px-[6px] left-3 -top-6  bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
								>
									Name
								</label>
							</div>
							<div class="relative w-full">
								<input
									type="email"
									id="email"
									name="email"
									class="peer w-full font-secondary rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
									placeholder="Email"
								/>
								<label
									for="email"
									class="absolute font-primary left-3 py-[2px] px-[6px] -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
								>
									Email
								</label>
							</div>
							<div class="relative w-full">
								<input
									type="number"
									id="phone"
									name="phone"
									class="peer w-full font-secondary rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-2 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
									placeholder="Phone"
								/>
								<label
									for="phone"
									class="absolute font-primary left-3 py-[2px] px-[6px] -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
								>
									Phone
								</label>
							</div>
						</div>
						<div class="mt-8  relative">
							<textarea
								id="message"
								name="message"
								class="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out font-secondary focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
								placeholder="Message"
							></textarea>
							<label
								for="message"
								class="absolute font-primary py-[2px] px-[6px] left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
							>
								Message
							</label>
						</div>
						<div className="flex justify-center mt-10">
							<button
								type="submit"
								className="cursor-pointer overflow-hidden text-sm font-bold  text-white bg-none rounded-2xl py-3 px-[34px] border-x border-x-white relative group hover:text-black z-10  duration-[400ms] ease-in-out"
							>
								Submit
								<div className="w-0 h-0 bg-white absolute left-0 top-0 duration-[350ms] ease-in-out rounded-t-none rounded-l-none rounded-br-[100%]   group-hover:w-[100%] -z-10 group-hover:h-[100%]  "></div>
								<div className="w-0 h-0 bg-white absolute right-0 bottom-0 duration-[450ms] ease-in-out rounded-tl-[180%] rounded-r-none rounded-b-none   group-hover:w-[100%] -z-10 group-hover:h-[100%]"></div>
							</button>
						</div>
					</motion.form>

					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.5 }}
						class="mt-7 md:mt-10  border-t border-gray-800 p-2 pt-8 text-center"
					>
						<a className="text-indigo-400 font-secondary font-" href="mailto:mahidulislamsohan76@gmail.com">
							mahidulislamsohan76@gmail.com
						</a>
						<p class="mt-1 mb-2 md:my-3 leading-normal">Dhaka 1207</p>
						<span class="inline-flex">
							<a href="#" className="text-gray-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="h-5 w-5"
									viewBox="0 0 24 24"
								>
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a href="#" class="ml-4 text-gray-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="h-5 w-5"
									viewBox="0 0 24 24"
								>
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a href="#" class="ml-4 text-gray-500">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="h-5 w-5"
									viewBox="0 0 24 24"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
							<a href="#" class="ml-4 text-gray-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									class="h-5 w-5"
									viewBox="0 0 24 24"
								>
									<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
								</svg>
							</a>
						</span>
					</motion.div>
				</Container>
			</section>
		</div>
	);
};

export default Contact;
