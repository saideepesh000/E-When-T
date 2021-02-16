import { Menu, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";

import { openModal } from "../../redux/actions/modalAction";

const SignedOutMenu = () => {
	const dispatch = useDispatch();
	return (
		<Menu.Item position="right">
			<Button
				onClick={() => dispatch(openModal({ modalType: "LoginForm" }))}
				content="Login"
			/>
			<Button content="Sign Up" style={{ marginLeft: "10px" }} />
		</Menu.Item>
	);
};

export default SignedOutMenu;
