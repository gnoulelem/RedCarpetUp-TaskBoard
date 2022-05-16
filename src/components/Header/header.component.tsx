import React, { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';

import logo from '../../assets/logo.png';
import './header.styles.scss';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [profile, setProfile] = useState('');

  useEffect(() => {
    getProfilePhoto();
  }, []);

  const handleLogout = async (): Promise<void> => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const getProfilePhoto = async (): Promise<void> => {
    const response = await fetch('https://picsum.photos/id/29/info');
    const data = await response.json();
    setProfile(data.download_url);
  };

  return (
    <header className="header">
      <div className="header-logo-container">
        <img width={40} src={logo} alt="Official Logo" /> <span>TaskBoard</span>
      </div>
      <img
        onClick={() => setShowLogout(!showLogout)}
        src={profile}
        alt="Profile"
        className="header-profile"
      />
      {showLogout && (
        <div onClick={handleLogout} className="header-logout">
          Logout
        </div>
      )}
    </header>
  );
};

export default Header;
