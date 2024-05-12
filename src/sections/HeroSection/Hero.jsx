import {
  HeroContent,
  HeroImage, HeroImageBackdrop,
  HeroImageWrapper,
  HeroSubtitle,
  HeroTitle,
  HeroWrapper
} from '@/sections/HeroSection/Style.js'
import {HighlightText} from '@/components/CommonStyle.js'
import SelfPortrait from '@/assets/self-portrait.jpg'
import Button from '@/components/Button/Button.jsx'
const Hero = () => {
  const redirectToContact = () => {
    window.location.href = '#contact-section'
  }
  return (
    <HeroWrapper>
      <HeroContent>
        <HeroTitle>
          I'm <HighlightText>Bryan Miraclo</HighlightText>
        </HeroTitle>
        <HeroSubtitle>
          Frontend Web Developer
        </HeroSubtitle>
        <Button label="Contact Me" btnFunction={redirectToContact}/>
      </HeroContent>
      <HeroImageWrapper>
        <HeroImage src={SelfPortrait} alt="Self Portrait">
          <img src={SelfPortrait} alt="Self Portrait"/>
        </HeroImage>
        <HeroImageBackdrop/>
      </HeroImageWrapper>

    </HeroWrapper>
  )
}

export default Hero;