import { Outlet } from 'react-router';

function Layout() {
  return (
    <div>
      <header>
        <h1>My Application</h1>
        <nav>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2025 My Application</p>
      </footer>
    </div>
  );
}

export default Layout;
