// withAuth.js

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { checkAuthentication } from './CheckAuthentication';


const withAuth = (WrappedComponent: any) => {
    const AuthenticatedComponent = (props: any) => {
        const router = useRouter();
        const isAuthenticated = checkAuthentication();

        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/admin/signin');
            }
        }, [isAuthenticated]);


        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuth;