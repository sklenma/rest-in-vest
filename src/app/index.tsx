import { AppProvider } from './provider';
import { AppRouter } from './router';
import '@/styles/index.css'

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};