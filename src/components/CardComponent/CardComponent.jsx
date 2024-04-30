import styles from './CardComponent.module.css'
import PropTypes from 'prop-types'
import Button from '@/components/Button/Button.jsx'
function CardComponent(props) {
    const { title, description, available } = props


    const addButton = () => {
        return available && <Button label="Add to Cart"/>
    }
    return (
        <div className={styles.card}>
            <img
                src="https://via.placeholder.com/150"
                alt="placeholder"
            />
            <h2>{title}</h2>
            <p>{description}</p>
            { addButton() }
        </div>
    )
}
CardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    available: PropTypes.bool
}
CardComponent.defaultProps = {
    title: 'Default Title',
    description: 'Default Description',
    available: false
}
export default CardComponent