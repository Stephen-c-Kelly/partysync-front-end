// Assuming you've already imported necessary files and components as before
import TextOnlyButton from "../Buttons/TextOnlyButton";
import LoginFormField from "../FormFields/LoginFormField";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../services/users';
import './LoginForm.css'

const LoginForm = ({ updateUser }) => {
	const navigate = useNavigate();
	const [message, setMessage] = useState(null);
	const [form, setForm] = useState({
		username: "",
		password: "",
	});
  
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({
			...prevForm,
			[name]: value,
		}));
	};
  
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const userData = await signIn(form);
			updateUser(userData);
			navigate("/user/profile");
		} catch (error) {
			console.error(error);
			setMessage(error.response.data.error);
			setTimeout(() => setMessage(null), 3000);
		}
	};
  
	return (
		<div className="form">
			<form onSubmit={handleSubmit}>
				
				<div className="control">
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={form.username}
						onChange={handleChange}
					/>
				</div>
				<div className="control">
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={form.password}
						onChange={handleChange}
					/>
				</div>
				{message && <p>{message}</p>}
				<button type="submit" className="btn">Submit</button>
			</form>
			<p className='text-white cursor-pointer text-center mt-4' style={{ marginLeft: '172px' }} onClick={() => navigate("/user/signup")}>
    Sign Up
</p>

		</div>
	);
  };
  
  export default LoginForm;

