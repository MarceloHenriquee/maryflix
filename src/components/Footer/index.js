import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo da Maryflix" />
      </a>
      <p>
        Orgulhosamente criado por 
        {' '}
        <a href="https://www.netsystemsweb.com.br/">
        Net Systems - Web Solutions
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
