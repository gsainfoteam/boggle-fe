import { useRouter } from "@tanstack/react-router";

export default function Sidebar() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const navItems = [
    { label: "홈", to: "/" },
    { label: "게시글 작성하기", to: "/write" },
    { label: "채팅", to: "/chat" },
  ];

  return (
    <nav style={{ padding: 24 }}>
      {navItems.map((item) => (
        <button
          key={item.to}
          onClick={() => router.navigate({ to: item.to })}
          style={{
            display: "block",
            width: "100%",
            padding: "10px 0",
            border: "none",
            borderRadius: 8,
            background: currentPath === item.to ? "#e5e5e5" : "transparent",
            color: currentPath === item.to ? "#222" : "#3366cc",
            fontWeight: 500,
            fontSize: 15,
            marginBottom: 12,
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
            textAlign: "left",
          }}
        >
          {item.label}
        </button>
      ))}
      <div>
        <b style={{ fontSize: 15 }}>카테고리</b>
        <ul style={{ listStyle: "none", padding: 0, marginTop: 8 }}>
          <li style={{ fontSize: 15 }}>전체</li>
          <li style={{ fontSize: 15 }}>홈메</li>
          <li style={{ fontSize: 15 }}>공동구매</li>
          <li style={{ fontSize: 15 }}>프로젝트</li>
          <li style={{ fontSize: 15 }}>공부</li>
          <li style={{ fontSize: 15 }}>취미</li>
          <li style={{ fontSize: 15 }}>배달</li>
        </ul>
      </div>
    </nav>
  );
}
