import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React from "react";
import { login } from "../api/user/login";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
});

async function LoginForm() {
  console.log('start')
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
    localStorage.setItem("accessToken", res.access_token);
    document.cookie = `refreshToken=${res.refresh_token}; path=/;`;
    navigate({ to: "/" });
  };
  
  const authorizeUrl = new URL('https://idp.gistory.me/authorize');
  authorizeUrl.searchParams.append('client_id', '5aec0c22-288b-478f-8bbc-92cfd89fc91d');
  authorizeUrl.searchParams.append('redirect_uri', 'http://localhost:5173/redirect');
  authorizeUrl.searchParams.append('scope', ['profile','student_id','email'].join(' '));
  authorizeUrl.searchParams.append('response_type', ['code'].join(' '));
  authorizeUrl.searchParams.append('code_challenge', 'code_challenge');
  authorizeUrl.searchParams.append('code_challenge_method', 'plain');
  location = authorizeUrl;

  return (
    <form
      onSubmit={submitLogin}
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
        type="submit"
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
    </form>
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
