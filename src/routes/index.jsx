import { createFileRoute } from '@tanstack/react-router';
import Layout from '../component/Layout';
import CardList from '../component/CardList';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  validateSearch: (search) => ({ type: search.type ?? 'ALL' }),
});

function RouteComponent() {
  const type = Route.useSearch().type;
  return (
    <Layout>
      <CardList type={type} />
    </Layout>
  );
}
