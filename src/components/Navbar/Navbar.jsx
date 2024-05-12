import {
    NavbarWrapper,
    NavItem,
} from './Style'

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavItem href='#'>
              <img src="/images/home.svg" alt="logo" />
              Home
            </NavItem>
          <NavItem href='#project-section'>
            <img src="/images/portfolio.png" alt="logo"/>
            Portfolio
          </NavItem>
          <NavItem href="#contact-section">
            <img src="/images/contact.png" alt="logo"/>
            Contact
          </NavItem>
        </NavbarWrapper>
    )
}

export default Navbar