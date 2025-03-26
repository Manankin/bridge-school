import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <React.Fragment>
            <Header />

            <main className='container'>
                <Outlet />
            </main>

            <footer className='footer'>

            </footer>
        </React.Fragment>
    )
}

export { Layout }