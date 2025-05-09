import './DropDownInput.css'
import DropDownArrowIcon from '../../../assets/icons/DropDownArrow'

export default function DropDownInput({
  icon,
  dropDownIcon = <DropDownArrowIcon />,
  onChange = e => e
}) {
  return (
    <div className='form-input-container body-text-1 drop-down-container'>
      {icon && icon}
      <select
        className='form-text-input body-text-1 form-select'
        onChange={onChange}
      >
        <option value="">Select Duration</option>
        <option value="duration_1">Duration 1</option>
        <option value="duration_2">Duration 2</option>
      </select>
      {dropDownIcon && <span className="drop-down-select-icon">{dropDownIcon}</span>}
    </div>
  )
}