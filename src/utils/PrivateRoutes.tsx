import { useAuth } from '@/hooks/UseAuth'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoutes() {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet/> : <Navigate to={'/'} />
}