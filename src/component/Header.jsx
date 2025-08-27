import { useRouter } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { getMyProfile } from '../api/user/getMyProfile';

export default function Header() {
  const router = useRouter();

  const [name, setName] = useState('로그인');
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem('accessToken'));
    if (token) {
      getMyProfile(token).then((user) => {
        setName(user.name);
      });
    }
  }, [token]);

  return (
    <header className="flex w-full items-center justify-between bg-white py-2 px-[10px] text-text">
    
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
          src="/icons/boggle-logo.svg"
          alt="BOGGLE logo"
          className="
            h-[24px]
            w-[24px]
            object-contain
            block
          "
        />
        <b
          className="
            font-normal
            text-[24px]
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
          flex-1
          items-center
          w-fit
          max-w-[600px]
          h-[36px]
          mx-4
        "
      >
        <input
          placeholder="검색"
          className="
            flex-1
            w-full
            h-full
            rounded-l-[30px]
            border-[1px]
            border-[#E8E8E8]
            py-[10px]
            px-[20px]
            gap-[10px]
            text-[16px]
            leading-4
            outline-none
          "
        />
        <button
          className="
            flex
            w-fit
            h-full
            items-center
            justify-center
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
          <img
            src="/icons/search.svg"
            alt="search"
            className="
            h-[20px]
            w-[20px]
            object-contain
            block
          "
          />
        </button>
      </div>

      <button
        onClick={() => {
          if (name === '로그인') router.navigate({ to: '/login' });
          else router.navigate({ to: '/myProfile' });
        }}
        className="
          h-[36px]
          gap-[8px]
          font-normal
          text-[16px]
          leading-[100%]
          tracking-[0%]
          px-4
          py-2
          rounded-md
          bg-white
          cursor-pointer
          text-[#4B7EFF]
          flex
          items-center
          whitespace-nowrap
        "
      >
        <img
          src="/icons/login-profile.svg"
          alt="login profile"
          className="
            h-[20px]
            w-[20px]
            object-contain
            block
          "
        />
        {name}
      </button>
    </header>
  );
}
