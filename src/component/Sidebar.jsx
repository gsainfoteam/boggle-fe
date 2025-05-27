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
    <nav
      className="
      p-6
    "
    >
      {navItems.map((item) => (
        <button
          key={item.to}
          onClick={() => router.navigate({ to: item.to })}
          className={`
            block 
            w-full 
            py-2.5 
            border-none 
            rounded-lg 
            ${
              currentPath === item.to
                ? "bg-gray-200 text-gray-800"
                : "bg-transparent text-blue-600"
            } 
            font-medium 
            text-[15px] 
            mb-3 
            cursor-pointer 
            transition-colors 
            text-left
          `}
        >
          {item.label}
        </button>
      ))}
      <div>
        <b
          className="
          text-[15px]
        "
        >
          카테고리
        </b>
        <ul
          className="
          list-none 
          p-0 
          mt-2
        "
        >
          <li className="text-[15px]">전체</li>
          <li className="text-[15px]">룸메</li>
          <li className="text-[15px]">공동구매</li>
          <li className="text-[15px]">프로젝트</li>
          <li className="text-[15px]">공부</li>
          <li className="text-[15px]">취미</li>
          <li className="text-[15px]">배달</li>
        </ul>
      </div>
    </nav>
  );
}
