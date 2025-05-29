import { Link, useRouter } from "@tanstack/react-router";

export default function Sidebar() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;
  // 현재 선택된 카테고리 type 추출
  const currentCategory = router.state.location.search?.type;

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

  // 카테고리 버튼 정보 배열 (type 값이 모두 다르게!)
  const categoryButtons = [
    { label: "공동구매", type: "GROUP", icon: categoryIcons["공동구매"] },
    { label: "공부", type: "STUDY", icon: categoryIcons["공부"] },
    { label: "룸메", type: "ROOMMATE", icon: categoryIcons["룸메"] },
    { label: "배달", type: "DELIVERY", icon: categoryIcons["배달"] },
    { label: "취미", type: "HOBBY", icon: categoryIcons["취미"] },
    { label: "프로젝트", type: "PROJECT", icon: categoryIcons["프로젝트"] },
  ];

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
              ${currentPath === item.to && (!currentCategory || currentCategory === "ALL") ? "bg-[#B1C7FF] text-black" : "bg-transparent"} 
              font-medium 
              text-[15px]
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

      {/* Divider */}
      <div className="border-t border-gray-300 my-4" />

      {/* 카테고리 영역 */}
      <div>
        <label className="text-[18px] font-bold">카테고리</label>
        <div className="mt-2 flex flex-col gap-1">
          {categoryButtons.map((cat) => (
            <button
              key={cat.label}
              className={`
                flex items-center gap-[20px] w-full p-[5px] border-none rounded-[15px]
                font-medium text-[15px] cursor-pointer transition-colors text-left
                ${currentCategory === cat.type ? "bg-[#B1C7FF] text-black" : "bg-transparent text-black"}
              `}
              onClick={() =>
                router.navigate({ to: "/", search: { type: cat.type } })
              }
            >
              <img
                src={cat.icon}
                alt={`${cat.label} icon`}
                className="w-5 h-5"
              />
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
