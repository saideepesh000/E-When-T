import { FormField, Label } from "semantic-ui-react";
import { useField } from "formik";

export default function CustomInput({ label, ...props }) {
	const [field, meta] = useField(props);
	return (
		<FormField error={meta.touched && !!meta.error}>
			<input {...field} {...props} />
			{meta.touched && meta.error ? (
				<Label basic color="red">
					{meta.error}
				</Label>
			) : null}
		</FormField>
	);
}
