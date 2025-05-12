import "./TextInput.css";
import "../FormInput.css";

export default function TextInput({
  icon,
  placeholder = "Enter text",
  onChange = (e) => e,
  value = "",
}) {
  return (
    <div className="form-input-container body-text-1">
      {icon && icon}
      <input
        type="text"
        className="form-text-input body-text-1"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
