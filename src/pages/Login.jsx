import React, { useContext } from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { AuthContext } from "../context";

const Login = () => {
	const {setIsAuth} = useContext(AuthContext)

	const login = (e) => {
		setIsAuth(true)
		localStorage.setItem('auth', 'true')
	}
	return (
		<div>
			<h1>
				Log-in
			</h1>
			<form onSubmit={login}>
				<MyInput type="text" placeholder="Enter your login..."/>
				<MyInput type="password" placeholder="Enter your password..."/>
				<MyButton>
					Login
				</MyButton>
			</form>
		</div>
	)
}
export default Login