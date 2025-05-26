import { useRouter } from "@tanstack/react-router";

export default function Header() {
  const router = useRouter();

  return (
    <header
      className="
      h-[55px]
      bg-white 
      justify-between
      py-[8px]
      px-[16px]
      // border-b 
      // border-gray-200 
      // flex 
      // items-center
      // sticky 
      // top-0 
      // z-10
    "
    >
      <img
        src="/logo.png"
        alt="logo"
        className="
          h-8 
          mr-2
        "
      />
      <b
        className="
        text-[22px] 
        mr-8
      "
      >
        BOGGLE
      </b>

      <input
        placeholder="검색"
        className="
          flex-1 
          w-[531px] 
          h-[39px]
          rounded-l-[30px] 
          border-[1px]
          border-[#E8E8E8]
          py-[10px] 
          px-[20px]
          gap-[10px]
        "
      />

      <button
        className="
        w-[69px] 
        h-[39px] 
        rounded-r-[20px]
        border-r-[1px]
        border-b-[1px]
        border-t-[1px]
        border-l-none
        border-[#E8E8E8]
        pr-[25px]
        pl-[20px]
        gap-[10px]
        bg-[#F5F5F7]
      "
      >
        🔍
      </button>

      <button
        onClick={() => router.navigate({ to: "/login" })}
        className="
          ml-auto 
          px-4 
          py-1.5 
          rounded-md 
          border 
          border-gray-300 
          bg-white 
          cursor-pointer 
          text-sm
        "
      >
        로그인
      </button>
    </header>
  );
}
