import { createBrowserRouter, RouterProvider } from 'react-router';
import { lazy, Suspense } from 'react';
import Layout from './layout/userLayout/Layout.tsx';

const Dashboard = lazy(() => wait(1000).then(() => import('./pages/Dashboard.tsx')));
const About = lazy(() => wait(5000).then(() => import('./pages/About.tsx')));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback="Loading..."><Layout /></Suspense>,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

// Simulate a delay for lazy loading
// This is just for demonstration purposes. In a real application, you would not need this.
// It is used to simulate a network delay when loading the component.
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function AppRouter() {
  return <RouterProvider router={router} />;
}