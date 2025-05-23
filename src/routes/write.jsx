import { createFileRoute } from "@tanstack/react-router";
import Layout from "../component/Layout";

export const Route = createFileRoute("/write")({
  component: WriteComponent,
});

function WriteComponent() {
  return (
    <Layout>
      <h2>게시글 작성하기</h2>
      {/* 폼 구현 예정 */}
    </Layout>
  );
}
