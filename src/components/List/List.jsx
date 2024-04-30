import PropTypes from 'prop-types'
import styles from './List.module.css'
function List(props) {
    const { items } = props
    items.sort((a, b) => a.name.localeCompare(b.name))

    return (
        <>
            <h2 className={styles['list-title']}>Title</h2>
            <ul className={styles['list-items']}>
                {items.map((item, index) => (
                    <li className={styles.listItem} key={index}>{item.name.toUpperCase()} == {item.color}</li>
                ))}
            </ul>
        </>
    )
}
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    }))
}
List.defaultProps = {
    items: []
}
export default List