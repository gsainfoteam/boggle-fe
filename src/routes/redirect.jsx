import { createFileRoute, useLocation, useNavigate, useRouter } from '@tanstack/react-router';
import Layout from '../component/Layout';
import React, { useEffect } from 'react';
import { login } from '../api/user/login';

export const Route = createFileRoute('/redirect')({
    component: RedirectComponent,
});

async function RedirectComponent() {
    const router = useRouter();
    const navigate = useNavigate();
    const location = useLocation()
    const code = location.search.code;
    const res = await login(code)
    localStorage.setItem("accessToken", res.access_token);
    if (res) navigate({ to: "/" });
    return (
        <div>
            <h1>Redirect</h1>
        </div>
    )
}

export default RedirectComponent;