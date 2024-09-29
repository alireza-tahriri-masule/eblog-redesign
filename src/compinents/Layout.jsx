import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div>
      <header>
        <Header />
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav> */}
      </header>

      {/* <main>
        <Outlet />
      </main>

      <footer>
        <p>Footer content here</p>
      </footer> */}
    </div>
  );
}

export default Layout;
