import { useRouter } from "@tanstack/react-router";

const headerStyle = {
  height: 56,
  background: "#fff",
  borderBottom: "1px solid #eee",
  display: "flex",
  alignItems: "center",
  padding: "0 24px",
  position: "sticky",
  top: 0,
  zIndex: 10,
};

export default function Header() {
  const router = useRouter();

  return (
    <header style={headerStyle}>
      <img src="/logo.png" alt="logo" style={{ height: 32, marginRight: 8 }} />
      <b style={{ fontSize: 22, marginRight: 32 }}>BOGGLE</b>
      <input
        placeholder="검색"
        style={{ flex: 1, maxWidth: 400, marginRight: 16, padding: 6 }}
      />
      <button
        onClick={() => router.navigate({ to: "/login" })}
        style={{
          marginLeft: "auto",
          padding: "6px 16px",
          borderRadius: 6,
          border: "1px solid #ddd",
          background: "#fff",
          cursor: "pointer",
          fontSize: 14,
        }}
      >
        로그인
      </button>
    </header>
  );
}
