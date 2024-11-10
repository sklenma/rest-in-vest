import { ContentLayout } from "@/components/layouts/content-layout";

export const DashboardRoute = () => {
  return (
    <ContentLayout title="Dashboard">
      <h1 className="text-xl">
        Welcome 
      </h1>
      <h4 className="my-3">
        Your role is dsadas
      </h4>
      <p className="font-medium">In this application you can:</p>
    </ContentLayout>
  );
};