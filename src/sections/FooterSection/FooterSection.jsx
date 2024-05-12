import {useState, useRef} from 'react'
import {
  CopyrightText,
  FooterForm,
  FooterText,
  FooterWrapper,
  TextArea,
  TextInput
} from '@/sections/FooterSection/Style.js'
import {HighlightText} from '@/components/CommonStyle.js'
import Button from '@/components/Button/Button.jsx'

import axios from 'axios'

const FooterSection = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }
  const resetForm = () => {
    setEmail('')
    setName('')
    setMessage('')
  }

  const sendEmail = async () => {
    if (isLoading) return
    if (!email || !name || !message) {
      alert('Please fill in all fields')
      return
    }
    setIsLoading(true)
    axios.post('https://api.web3forms.com/submit', {
      access_key: 'b75e62b6-aa5c-4360-9e5b-09476713e375',
      name,
      email,
      message
    })
      .then(() => {
        alert('Message sent successfully')
        resetForm()
      })
      .catch(error => {
        alert('There was an error sending the message.', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <FooterWrapper id="contact-section">
      <FooterText>
        <HighlightText>Contact</HighlightText> me.
      </FooterText>
      <FooterForm>
        <TextInput disabled={isLoading} placeholder="Your name" value={name} onChange={handleNameChange}/>
        <TextInput disabled={isLoading} placeholder="Your email" value={email} onChange={handleEmailChange}/>
        <TextArea disabled={isLoading} placeholder="Your message" value={message} onChange={handleMessageChange}/>
        <Button
          label="Send"
          size="sm"
          btnFunction={sendEmail}
          isLoading={isLoading}
        />
      </FooterForm>
      <CopyrightText>&copy;2024.Bryan Miraclo Web Portoflio</CopyrightText>
    </FooterWrapper>
  )
}

export default FooterSection;