import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { checkAuthentication } from './CheckAuthentication';

type WrappedComponentProps = {
    // Specify the expected props for the wrapped component here
    [key: string]: unknown;
};

const withAuth = <P extends WrappedComponentProps>(WrappedComponent: React.ComponentType<P>) => {
    const AuthenticatedComponent: React.FC<P> = (props) => {
        const router = useRouter();
        const isAuthenticated = checkAuthentication();

        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/admin/signin');
            }
        }, [isAuthenticated, router]);

        // Avoid rendering the WrappedComponent if not authenticated
        if (!isAuthenticated) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAuth;
