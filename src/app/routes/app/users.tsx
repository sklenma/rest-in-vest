import { QueryClient } from '@tanstack/react-query';

import { ContentLayout } from '@/components/layouts/content-layout';

export const usersLoader = (queryClient: QueryClient) => async () => {
  const query = {
    queryKey: ['users'],
    queryFn: () => {},
  };

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const UsersRoute = () => {
  return (
    <ContentLayout title="Users">
        <>here should be users </>
    </ContentLayout>
  );
};