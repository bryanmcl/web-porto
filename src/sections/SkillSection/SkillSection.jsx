import {
  SkillSectionContent,
  SkillSectionTitle,
  SkillSectionWrapper
} from '@/sections/SkillSection/Style.js'
import { HighlightText } from '@/components/CommonStyle.js'
import SkillCard from '@/components/SkillCard/SkillCard.jsx'
import { Skills } from '@/assets/json/skill'

const SkillSection = () => {
  const skillCards = Skills.map(({image, label}, index) => {
    return <SkillCard key={index} image={image} label={label}/>

  })
  return (
    <SkillSectionWrapper>
      <SkillSectionTitle>
        My <HighlightText>Skills</HighlightText>
      </SkillSectionTitle>
      <SkillSectionContent>
        {skillCards}
      </SkillSectionContent>
    </SkillSectionWrapper>
  )
}

export default SkillSection;