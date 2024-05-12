import {
  ProjectItem,
  ProjectSectionContent,
  ProjectSectionTitle,
  ProjectSectionWrapper
} from '@/sections/ProjectSection/Style.js'
import {HighlightText} from '@/components/CommonStyle.js'
import Button from '@/components/Button/Button.jsx'

const ProjectSection = () => {
  return (
    <ProjectSectionWrapper id='project-section'>
      <ProjectSectionTitle>
        Personal <HighlightText>Projects</HighlightText>
      </ProjectSectionTitle>
      <ProjectSectionContent>
        <ProjectItem>

        </ProjectItem>
        <ProjectItem>

        </ProjectItem>
        <ProjectItem>

        </ProjectItem>
      </ProjectSectionContent>

      <Button label="View More" />
    </ProjectSectionWrapper>
  )
}

export default ProjectSection;