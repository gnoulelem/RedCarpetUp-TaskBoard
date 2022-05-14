import React from 'react';

import logo from '../../assets/logo.png';
import './header.styles.scss';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="header-logo-container">
        <img width={40} src={logo} alt="Official Logo" /> <span>TaskBoard</span>
      </div>
      <img
        src="https://picsum.photos/id/77/1631/1102"
        alt="Profile"
        className="header-profile"
      />
    </header>
  );
};

export default Header;
