import { useRouter } from "@tanstack/react-router";

export default function Sidebar() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const navItems = [
    { label: "홈", to: "/", icon: "/icons/home-simple-door.svg" },
    { label: "게시글 작성하기", to: "/write", icon: "/icons/text.svg" },
    { label: "채팅", to: "/chat", icon: "/icons/Chat2.svg" },
    { label: "마이 페이지", to: "/myprofile", icon: "/icons/user-circle.svg" },
  ];

  return (
    <nav
      className="
      p-6
      bg-amber-300
      h-full
    "
    >
      {navItems.map((item) => (
        <button
          key={item.to}
          onClick={() => router.navigate({ to: item.to })}
          className={`
            flex
            items-center
            gap-2
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
          <img src={item.icon} alt={`${item.label} icon`} className="w-5 h-5" />
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
