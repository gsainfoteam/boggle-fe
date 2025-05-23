import { createFileRoute } from "@tanstack/react-router";
import Layout from "../component/Layout";
import CardList from "../component/CardList";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <CardList />
    </Layout>
  );
}
