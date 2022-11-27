import "./FormInput.styles.jsx";
import { FormInputLabel, Group, Input } from "./FormInput.styles.jsx";

export const FormInput = (props) => {
  const { label, ...otherProps } = props;
  return (
    <Group>
      <Input {...otherProps} required />

      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
