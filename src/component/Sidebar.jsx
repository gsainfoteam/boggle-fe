import { useRouter } from "@tanstack/react-router";

export default function Sidebar() {
  const router = useRouter();
  
  const navItems = [
    {label: "홈", to: "/", icon: "/category-icons/homeB.svg"},
    {label: "모집글 작성", to: "/chooseCategory", icon: "/category-icons/textB.svg"},
    {label: "채팅", to: "/chat", icon: "/category-icons/chatB.svg"},
    {label: "마이 페이지", to: "/myprofile", icon: "/category-icons/profileB.svg"},
  ];

  // 카테고리 버튼 정보 배열 (type 값이 모두 다르게!)
  const categoryButtons = [
    { label: "룸메이트", type: "ROOMMATE", icon: "/category-icons/roommateB.svg" },
    { label: "스터디", type: "STUDY", icon: "/category-icons/studyminiB.svg" },
  ];

  return (
    <nav className=" h-full p-[10px] gap-[10px]">

      {/* 상단 네비게이션 버튼 */}
      <div className="flex flex-col gap-1 mb-4">
        {navItems.map((item) => (
          <button
            key={item.to}
            onClick={() => router.navigate({ to: item.to })}
            className="
            flex items-center w-full h-[40px] rounded-[10px] gap-[5px] p-[5px] 
            font-medium text-[15px] text-[#4b7eff]
            cursor-pointer hover:bg-[#e5edfa]"
          >
            <img
              src={item.icon}
              alt={`${item.label} icon`}
              className="w-[40px] h-[40px]"
            />
            {item.label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-[#4b7eff] my-3" />

      {/* 카테고리 영역 */}
      <div>
        <label className="text-[17px] font-bold text-[#4b7eff]">카테고리</label>

        <div className="mt-2 flex flex-col gap-1">
          {categoryButtons.map((cat) => (
            <button
              key={cat.label}
              onClick={() => router.navigate({ to: "/", search: { type: cat.type } })}
              className="
              flex items-center w-full h-[40px] rounded-[10px] gap-[5px] p-[5px] 
              font-medium text-[15px] text-[#4b7eff]
              cursor-pointer hover:bg-[#e5edfa]"
            >
              <img
                src={cat.icon}
                alt={`${cat.label} icon`}
                className="w-[40px] h-[40px]"
              />
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
