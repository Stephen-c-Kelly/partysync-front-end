const InviteButton = ({ handleClick, text, additionalClasses, disabled }) => {

  const classes = `bg-blue text-white h-12 mx-2 transition duration-150 ease-in-out rounded-lg ${disabled ? 'cursor-not-allowed opacity-50' : 'hover:rounded-full active:border active:border-black'} ${additionalClasses}`;

  return (
    <button
      onClick={handleClick}
      className={classes}
      disabled={disabled}
    >
      <h2>{text}</h2>
    </button>
  );
};

InviteButton.defaultProps = {
  disabled: false
};

export default InviteButton;