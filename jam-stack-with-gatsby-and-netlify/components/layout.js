import React from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  width: 100vw;
  height: 100vw;
  /* background-color: tomato; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  padding: 0 0.5rem;
  bottom: 28px;
  display: flex;
  justify-content: space-between;
`

const FooterLink = styled.a`
  font-size: 1rem;
  color: #07c;
`

export default ({ children }) => (
  <Layout>
    {children}
    <Footer className="custom-layout__footer">
      <FooterLink
        className="footer__follow-along"
        href="https://gyanev.com/jamstack"
      >
        https://gyanev.com/jamstack
      </FooterLink>
      <FooterLink
        className="footer__twitter"
        href="https://www.twitter.com/jumpalottahigh"
      >
        @jumpalottahigh
      </FooterLink>
    </Footer>
  </Layout>
)
