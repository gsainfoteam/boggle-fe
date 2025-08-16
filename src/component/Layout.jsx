import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div
      className="
      flex 
      flex-col 
      h-screen 
      w-screen 
      min-w-0
    "
    >
      <Header />
      <div
        className="
        flex 
        flex-1 
        min-h-0 
        w-full 
        min-w-0
      "
      >
        <div
          className="
          w-[220px] 
          flex-shrink-0 
          bg-white 
          sticky 
          top-[55px] 
          h-[calc(100vh-55px)] 
          z-10
        "
        >
          <Sidebar />
        </div>
        <main
          className="
          flex-1 
          overflow-y-auto 
          bg-white
          w-full 
          box-border
        "
        >
          {children}
        </main>
      </div>
    </div>
  );
}
