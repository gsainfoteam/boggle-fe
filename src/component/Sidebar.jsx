import { Link, useRouter } from "@tanstack/react-router";

export default function Sidebar() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const navItems = [
    {
      label: "홈",
      to: "/",
      icon: "/icons/home-simple-door.svg",
      onClick: () => router.navigate({ to: "/", search: { type: "ALL" } }),
    },
    { label: "게시글 작성하기", to: "/write", icon: "/icons/text.svg" },
    { label: "채팅", to: "/chat", icon: "/icons/Chat2.svg" },
    { label: "마이 페이지", to: "/myprofile", icon: "/icons/user-circle.svg" },
  ];

  const categoryIcons = {
    룸메: "/category icons/door.svg",
    공동구매: "/category icons/cart.svg",
    프로젝트: "/category icons/teammates.svg",
    공부: "/category icons/book.svg",
    취미: "/category icons/hobby.svg",
    배달: "/category icons/curtlery.svg",
  };

  return (
    <nav
      className="
      p-[10px]
      gap-[10px]
      h-full
    "
    >
      {/* 상단 네비게이션 버튼 */}
      <div className="flex flex-col gap-1 mb-4">
        {navItems.map((item) => (
          <button
            key={item.to}
            onClick={
              item.onClick
                ? item.onClick
                : () => router.navigate({ to: item.to })
            }
            className={`
              flex
              items-center
              gap-[20px]
              w-full 
              p-[5px]
              border-none 
              rounded-[15px]
              ${currentPath === item.to ? "bg-[#B1C7FF] text-black" : "bg-transparent"} 
              font-medium 
              text-[15px] 
              mb-3 
              cursor-pointer 
              transition-colors 
              text-left
            `}
          >
            <img
              src={item.icon}
              alt={`${item.label} icon`}
              className="w-5 h-5"
            />
            {item.label}
          </button>
        ))}
      </div>

      {/* Divider 추가 */}
      <div className="border-t border-gray-300 my-4" />

      {/* 카테고리 영역 */}
      <div>
        <b className="text-[15px]">카테고리</b>
        <div className="mt-2 flex flex-col gap-1">
          <button
            className="flex items-center gap-2 w-full py-2.5 border-none rounded-lg bg-transparent text-black font-medium text-[15px] cursor-pointer transition-colors text-left hover:bg-gray-100"
            onClick={() =>
              router.navigate({ to: "/", search: { type: "DELIVERY" } })
            }
          >
            <img
              src={categoryIcons["공동구매"]}
              alt="공동구매 icon"
              className="w-5 h-5"
            />
            공동구매
          </button>
          <button
            className="flex items-center gap-2 w-full py-2.5 border-none rounded-lg bg-transparent text-black font-medium text-[15px] cursor-pointer transition-colors text-left hover:bg-gray-100"
            onClick={() =>
              router.navigate({ to: "/", search: { type: "STUDY" } })
            }
          >
            <img
              src={categoryIcons["공부"]}
              alt="공부 icon"
              className="w-5 h-5"
            />
            공부
          </button>
          <button
            className="flex items-center gap-2 w-full py-2.5 border-none rounded-lg bg-transparent text-black font-medium text-[15px] cursor-pointer transition-colors text-left hover:bg-gray-100"
            onClick={() =>
              router.navigate({ to: "/", search: { type: "ROOMMATE" } })
            }
          >
            <img
              src={categoryIcons["룸메"]}
              alt="룸메 icon"
              className="w-5 h-5"
            />
            룸메
          </button>
          <button
            className="flex items-center gap-2 w-full py-2.5 border-none rounded-lg bg-transparent text-black font-medium text-[15px] cursor-pointer transition-colors text-left hover:bg-gray-100"
            onClick={() =>
              router.navigate({ to: "/", search: { type: "DELIVERY" } })
            }
          >
            <img
              src={categoryIcons["배달"]}
              alt="배달 icon"
              className="w-5 h-5"
            />
            배달
          </button>
          <button
            className="flex items-center gap-2 w-full py-2.5 border-none rounded-lg bg-transparent text-black font-medium text-[15px] cursor-pointer transition-colors text-left hover:bg-gray-100"
            onClick={() =>
              router.navigate({ to: "/", search: { type: "HOBBY" } })
            }
          >
            <img
              src={categoryIcons["취미"]}
              alt="취미 icon"
              className="w-5 h-5"
            />
            취미
          </button>
          <button
            className="flex items-center gap-2 w-full py-2.5 border-none rounded-lg bg-transparent text-black font-medium text-[15px] cursor-pointer transition-colors text-left hover:bg-gray-100"
            onClick={() =>
              router.navigate({ to: "/", search: { type: "PROJECT" } })
            }
          >
            <img
              src={categoryIcons["프로젝트"]}
              alt="프로젝트 icon"
              className="w-5 h-5"
            />
            프로젝트
          </button>
        </div>
      </div>
    </nav>
  );
}
