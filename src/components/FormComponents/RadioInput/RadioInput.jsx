import generateUID from "../../../utils/generateUID";
import "./RadioInput.css";
import "../FormInput.css";

export default function RadioSelectInput({
  id = generateUID(), // This kinda makes it an impure function
  name,
  value,
  icon, // Assuming icon to be an svg, maybe make them font
  text = "Item",
  onChange = (e) => e,
}) {
  return (
    <div>
      <input
        type="radio"
        className="radio-select-input"
        id={id}
        name={name}
        value={value}
        tabIndex={-1}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="radio-select-text body-text-1 form-input-container"
        tabIndex={0}
      >
        {icon && icon}
        {text}
      </label>
    </div>
  );
}
