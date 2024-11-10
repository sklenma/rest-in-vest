import { Button } from '@/components/ui/button';
import { paths } from '@/config/paths';
import { useNavigate } from 'react-router-dom';


export const LandingRoute = () => {
    const navigate = useNavigate();

    const handleStart = () => {
          navigate(paths.app.dashboard.getHref());
      };

  return (
    <>
      <div className="flex h-screen items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Bulletproof React</span>
          </h2>
          <p>Showcasing Best Practices For Building React Applications</p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button
                onClick={handleStart}
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};