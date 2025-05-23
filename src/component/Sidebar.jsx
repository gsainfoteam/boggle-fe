import { Link } from "@tanstack/react-router";

export default function Sidebar() {
  return (
    <nav style={{ padding: 24 }}>
      <div style={{ marginBottom: 24 }}>
        <Link to="/">홈</Link>
      </div>
      <div style={{ marginBottom: 24 }}>
        <Link to="/write">게시글 작성하기</Link>
      </div>
      <div style={{ marginBottom: 24 }}>
        <Link to="/chat">채팅</Link>
      </div>
      <div>
        <b>카테고리</b>
        <ul style={{ listStyle: "none", padding: 0, marginTop: 8 }}>
          <li>전체</li>
          <li>홈메</li>
          <li>공동구매</li>
          <li>프로젝트</li>
          <li>공부</li>
          <li>취미</li>
          <li>배달</li>
        </ul>
      </div>
    </nav>
  );
}
