import './PrimaryButton.css';
import '../Button.css';

export default function PrimaryButton({
  text = 'Click Me',
  onClick = e => e
}) {
  return (
    <button className='primary-button button' onClick={onClick}>{text}</button>
  )
}