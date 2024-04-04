import PropTypes from "prop-types";
import "./Input.css";

const Input = (props) => {
	return (
		<>
			<input
				type={props.type}
				name={props.name}
				placeholder={props.placeholder}
			/>
		</>
	);
};

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
};

export default Input;
