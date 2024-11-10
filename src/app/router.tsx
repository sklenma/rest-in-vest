import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { paths } from '@/config/paths';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: async () => {
        const { LandingRoute } = await import('./routes/landing');
        return { Component: LandingRoute };
      },
    },
    {
      path: paths.app.dashboard.path,
      lazy: async () => {
        const { DashboardRoute } = await import('./routes/app/dashboard');
        return { Component: DashboardRoute };
      },
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();
  return <RouterProvider router={router} />;
};