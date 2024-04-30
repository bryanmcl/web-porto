import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import { ColorContext } from '@/App.jsx'
function Button(props) {
    const [label, setLabel] = useState(props.label)
    const color = useContext(ColorContext)
    const btnStyle = {
        backgroundColor: color?.text
    }
    const handleClick = () => {
        setLabel('Clicked')
    }
    return (
        <button onClick={handleClick} className={styles.btn} style={btnStyle}>
            {label}
        </button>
    )
}
Button.propTypes = {
    label: PropTypes.string.isRequired
}
Button.defaultProps = {
    label: 'Default Label'
}
export default Button