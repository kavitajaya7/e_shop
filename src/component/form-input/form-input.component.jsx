import "./form-input.styles.scss";

const FormInput = ({ label, otherProp }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        {...otherProp}
        // onChange={otherProp.onChange}
      />
      {label && (
        <label
          className={`${
            otherProp?.value?.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
