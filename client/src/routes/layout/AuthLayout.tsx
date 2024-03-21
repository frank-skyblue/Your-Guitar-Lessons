import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
    return (
        <div className="h-full bg-[url('assets/primary-bg.png')] bg-cover bg-center">
            <Outlet />
        </div>
    );
};

export default AuthLayout;
