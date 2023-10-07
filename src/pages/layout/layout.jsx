import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import { Outlet } from 'react-router-dom';
import SideBar from './../sideBar/SideBar.jsx';

const Layout = () => {
    return (
        <div>
            <Header />
            <main className="main-content">
                <Outlet />
                <SideBar />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
