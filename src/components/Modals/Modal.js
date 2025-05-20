import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';


    const Portal = ({children}) => {
    const [mounted, setMounted] = useState(false);
    const [portalRoot, setPortalRoot] = useState(null);


    useEffect(() => {
        const root = document.getElementById('portal-root');
        setPortalRoot(root);
        setMounted(true);
    }, []);

    return mounted && portalRoot ? createPortal(children, portalRoot) : null;
};

export default Portal;