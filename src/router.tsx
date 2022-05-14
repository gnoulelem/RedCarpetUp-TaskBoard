import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {LoginPage, SignupPage} from 'pages';

type RouterProps = {};

const Router: React.FC<RouterProps> = () => {
    return (
        <Routes>
            <Route path="/" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}

export default Router;