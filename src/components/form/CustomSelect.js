import { Select, FormField, Label } from "semantic-ui-react";
import { useField } from "formik";

export default function CustomSelect({ label, ...props }) {
	const [field, meta, helpers] = useField(props);
	return (
		<FormField error={meta.touched && !!meta.error}>
			<Select
				clearable
				value={field.value || null}
				onChange={(e, d) => helpers.setValue(d.value)}
				onBlur={() => helpers.setTouched(true)}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<Label basic color="red">
					{meta.error}
				</Label>
			) : null}
		</FormField>
	);
}
