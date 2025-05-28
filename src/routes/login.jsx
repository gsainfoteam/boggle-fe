import { createFileRoute } from '@tanstack/react-router';
import React from 'react';
import { login } from '../api/auth/login';

export const Route = createFileRoute('/login')({
  component: LoginComponent,
});

function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const submitLogin = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
  };

  return (
    <div
      className="
        flex 
        flex-col 
        gap-[15px]
      "
    >
      <div
        className="
        flex 
        items-center 
        justify-center
        w-[395.29px]
        h-[173.46px]
        gap-[5px]
      "
      >
        <img
          src="/icons/boggle-logo.svg"
          alt="BOGGLE logo"
          className="
          h-[90px]
          w-[76px]
        "
        />
        <h1
          className="
          font-normal
          text-[80px]
          leading-[100%]
          tracking-[0%]
        "
        >
          BOGGLE
        </h1>
      </div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="아이디"
        className="
          w-full 
          px-4 
          py-3 
          text-[15px]
          rounded-[10px]
          bg-[#E5EDFA]
          text-center
          cursor-pointer
        "
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
        className="
          w-full 
          px-4 
          py-3 
          text-[15px]
          rounded-[10px]
          bg-[#E5EDFA]
          text-center
          cursor-pointer
        "
      ></input>
      <button
        onClick={submitLogin}
        className="
          w-full 
          py-3 
          text-[15px] 
          bg-[#4B7EFF]
          text-white
          rounded-[10px]
          cursor-pointer 
        "
      >
        로그인
      </button>
      <p
        className="
          text-center
          text-[15px]
          cursor-pointer
        "
      >
        회원가입
      </p>
    </div>
  );
}

function LoginWrapper() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        gap-[60px]
        w-[535px]
        h-fit
      "
    >
      <LoginForm />
    </div>
  );
}

function LoginComponent() {
  return (
    <div
      className="
        w-[screen] 
        h-screen 
        flex 
        justify-center 
        items-center 
        bg-white
      "
    >
      <LoginWrapper />
    </div>
  );
}
