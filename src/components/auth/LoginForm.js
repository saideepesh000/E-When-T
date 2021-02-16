import { Button } from "semantic-ui-react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import CustomInput from "../form/CustomInput";
import ModalWrapper from "../modal/ModalWrapper";

import { signIn } from "../../redux/actions/authAction";
import { closeModal } from "../../redux/actions/modalAction";

export default function LoginForm() {
	const dispatch = useDispatch();

	const LoginSchema = Yup.object({
		email: Yup.string().required("email is required").email(),
		password: Yup.string().required("password is required"),
	});

	return (
		<ModalWrapper size={"mini"} header="sign in">
			<Formik
				validationSchema={LoginSchema}
				initialValues={{ email: "", password: "" }}
				onSubmit={async (values, { setSubmitting }) => {
					try {
						await dispatch(signIn(values));
						setSubmitting(false);
						dispatch(closeModal());
					} catch (e) {
						setSubmitting(false);
						console.log(e);
					}
				}}
			>
				{({ isSubmitting, dirty, isValid }) => (
					<Form className="ui form">
						<CustomInput placeholder="Email" name="email" />
						<CustomInput
							type="password"
							placeholder="Password"
							name="password"
						/>

						<Button
							loading={isSubmitting}
							disabled={!isValid || isSubmitting || !dirty}
							type="submit"
							fluid
							size="large"
							positive
							content="Login"
						/>
					</Form>
				)}
			</Formik>
		</ModalWrapper>
	);
}
