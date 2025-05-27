import { useRouter } from "@tanstack/react-router";

export default function Header() {
  const router = useRouter();

  return (
    <header
      className="
        w-full
        h-fit
        bg-white
        justify-between
        items-center
        py-[8px]
        px-[16px]
        flex
        sticky
        top-0
        z-10
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
          h-[39px]
          min-w-[120px]
          box-border
        "
      >
        <img
          src="/logo.png"
          alt="logo"
          className="
            h-[34px]
            w-[34px]
            object-contain
            block
          "
        />
        <b
          className="
            font-normal
            text-[28px]
            leading-[1]
            text-black
          "
        >
          BOGGLE
        </b>
      </div>

      <div
        className="
          flex
          items-center
          w-[600px]
          h-fit
        "
      >
        <input
          placeholder="검색"
          className="
            w-full
            h-fit
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
            w-fit
            h-[39px]
            rounded-r-[20px]
            border-r-[1px]
            border-b-[1px]
            border-t-[1px]
            border-l-0
            border-[#E8E8E8]
            pr-[25px]
            pl-[20px]
            gap-[10px]
            bg-[#F5F5F7]
          "
        >
          🔍
        </button>
      </div>

      <button
        onClick={() => router.navigate({ to: "/login" })}
        className="
          w-[74px]
          h-[24px]
          gap-[8px]
          font-normal
          text-[16px]
          leading-[100%]
          tracking-[0%]
          px-4
          py-1.5
          rounded-md
          border
          border-gray-300
          bg-white
          cursor-pointer
          text-sm
          text-blue-600
          flex
          items-center
          
        
        "
      >
        <span className="material-icons">😄</span>
        로그인
      </button>
    </header>
  );
}
