import Header from "./Header";
import Sidebar from "./Sidebar";

const layoutStyle = {
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  width: "100vw",
  minWidth: 0,
};

const mainAreaStyle = {
  display: "flex",
  flex: 1,
  minHeight: 0,
  width: "100%",
  minWidth: 0,
};

const sidebarStyle = {
  width: 220,
  flexShrink: 0,
  borderRight: "1px solid #eee",
  background: "#fff",
  position: "sticky",
  top: 0,
  height: "100vh",
  zIndex: 2,
};

const contentStyle = {
  flex: 1,
  overflowY: "auto",
  background: "#fafbfc",
  padding: 32,
  width: "100%",
  boxSizing: "border-box",
};

export default function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <Header />
      <div style={mainAreaStyle}>
        <div style={sidebarStyle}>
          <Sidebar />
        </div>
        <main style={contentStyle}>{children}</main>
      </div>
    </div>
  );
}
