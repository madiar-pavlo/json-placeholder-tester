import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../context";

const Navbar = () => {
	const {isAuth, setIsAuth} = useContext(AuthContext)

	const logOut = (e) => {
		setIsAuth(false)
		localStorage.removeItem('auth')
	}
	return(
		<nav className="navigation">
			<ul className="navigation__list">
				<li className="navigation__item">
					<Link to="about" className="navigation__link">
						About
					</Link>
				</li>
				<li className="navigation__item">
					<Link to="posts" className="navigation__link">
						Posts
					</Link>
				</li>
				{isAuth
					?
						<li className="navigation__item navigation__item--logout">
							<MyButton onClick={logOut} className="navigation__link">
								Log out
							</MyButton>
						</li>
					: 
					<></>
				}
			</ul>
		</nav>
	)
}

export default Navbar