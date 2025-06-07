import { GiCrossedBones } from "react-icons/gi";

export default function Modal({ open, onClose, children }) {
	return (
		//backdrop
		<div
			onClick={onClose}
			className={`fixed inset-0 flex justify-center z-[99999] items-center ${
				open ? "visible backdrop-blur-xs" : "invisible"
			} `}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={` bg-white rounded-lg shadow duration-300 h-[640px] w-[830px] transition-all ${
					open ? "scale-100 opacity-100" : "scale-0 opacity-0"
				} `}
			>
				<div onClick={onClose} className="absolute top-2 right-2 text-2xl cursor-pointer">
          <GiCrossedBones color="black" />

        </div>
				{children}
			</div>
		</div>
	);
}
