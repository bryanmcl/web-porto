import {CardImage, CardTitle, CardWrapper} from '@/components/SkillCard/Style.js'
import PropTypes from 'prop-types'

const SkillCard = ({image, label}) => {
  return (
    <CardWrapper>
      <CardImage src={image}/>
      <CardTitle>{label}</CardTitle>
    </CardWrapper>
  )
}
SkillCard.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string
}
SkillCard.defaultProps = {
  image: 'https://via.placeholder.com/150',
  label: 'Skill'
}
export default SkillCard;