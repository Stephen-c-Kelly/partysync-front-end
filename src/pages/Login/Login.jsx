import LoginForm from '../../components/LoginForm/LoginForm';
import Image from '../../components/LoginImage/LoginImage';
import Text from '../../components/LoginText/LoginText';
import SquareBlueButton from '../../components/Buttons/SquareBlueButton';
import { Link } from 'react-router-dom';


const Login = ({ updateUser }) => {
	return (
		<div>
			<Image />
			<Text />
			<LoginForm updateUser={updateUser} />
		</div>
	);
};

export default Login;
