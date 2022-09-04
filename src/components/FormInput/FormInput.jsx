import "./FormInput.scss";

export const FormInput = (props) => {
  const { label, ...otherProps } = props;
  return (
    <div className="group">
      <input className="form-input" {...otherProps} required />

      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : (
        ""
      )}
    </div>
  );
};
