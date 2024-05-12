import {ButtonWrapper} from '@/components/Button/Style.js'
import PropTypes from 'prop-types'

const Button = ({label, size, btnFunction, isLoading}) => {
  return (
    <ButtonWrapper size={size} onClick={btnFunction} isLoading={isLoading}>
      {label}
    </ButtonWrapper>
  )
}
Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  btnFunction: PropTypes.func,
  isLoading: PropTypes.bool
}
Button.defaultProps = {
  label: 'Button',
  size: 'md',
  btnFunction: () => {},
  isLoading: false
}
export default Button;