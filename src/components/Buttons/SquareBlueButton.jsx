// import './SquareBlueButton.css';

const SquareBlueButton = (props) => {
	
	const { handleClick, text, additionalClasses } = props;
	let classes = "bg-blue 500 text-white h-12 mx-2 transition duration-150 ease-in-out rounded-lg hover:rounded-full active:border active:border-black " 

	return (
		<button 
			onClick={handleClick} className={classes}  >

			<h2>{text}</h2>
		</button>
	);
};

export default SquareBlueButton;

// const SquareBlueButton = ({ handleClick, text, additionalClasses, disabled }) => {
  
//   const classes = `bg-blue-500 text-white h-12 mx-2 transition duration-150 ease-in-out rounded-lg hover:rounded-full active:border active:border-black ${additionalClasses}`;

//   return (
//     <button
//       onClick={handleClick}
//       className={classes} 
//       disabled={disabled} 
//     >
//       <h2>{text}</h2>
//     </button>
//   );
// };

// SquareBlueButton.defaultProps = {
// 	disabled: false
// }

// export default SquareBlueButton;


