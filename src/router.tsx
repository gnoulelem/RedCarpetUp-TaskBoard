import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage, Tasks } from 'pages';

type RouterProps = {};

const Router: React.FC<RouterProps> = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Tasks />} />
    </Routes>
  );
};

export default Router;
