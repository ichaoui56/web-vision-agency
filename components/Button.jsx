const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out ${
			variation === "primary"
				? "bg-[#0f8fd4] hover:bg-transparent border-transparent hover:border-[#0f8fd4] border-2 text-gray-100 hover:text-[#0f8fd4] box-border"
				 : "transparent border-2 border-[#0f8fd4] text-[#0f8fd4] hover:bg-[#0f8fd4] hover:text-gray-100 box-border"
		}`}>
		{children}
	</button>
);

export default Button;