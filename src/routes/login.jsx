import { createFileRoute, useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
});

async function LoginForm() {
  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    
    // IDP 리다이렉트를 여기로 이동
    const authorizeUrl = new URL('https://idp.gistory.me/authorize');
    authorizeUrl.searchParams.append('client_id', '5aec0c22-288b-478f-8bbc-92cfd89fc91d');
    authorizeUrl.searchParams.append('redirect_uri', 'http://localhost:5173/redirect');
    authorizeUrl.searchParams.append('scope', ['profile','student_id','email'].join(' '));
    authorizeUrl.searchParams.append('response_type', ['code'].join(' '));
    authorizeUrl.searchParams.append('code_challenge', 'code_challenge');
    authorizeUrl.searchParams.append('code_challenge_method', 'plain');
    
    // 로그인 버튼 클릭 시에만 IDP 리다이렉트
    window.location.href = authorizeUrl;
  };

  return (
    <form
      onSubmit={submitLogin}
      className="
        flex 
        flex-col
        items-center
      "
    >
      <div
        className="
        flex 
        items-center 
        justify-center
        w-[395.29px]
        h-[100px]
      "
      >
        <img
          src="/icons/boggle-logo.svg"
          alt="BOGGLE logo"
          className="h-[90px] w-[76px]"
        />
        <h1
          className="
          font-normal
          text-[80px]
          leading-[100%]
          tracking-[0%]
          font-jaldi
          "
        >
          BOGGLE
        </h1>
        <img
          src="/icons/boggle-logo-Rvs.svg"
          alt="BOGGLE logo"
          className="h-[90px] w-[76px]"
        />
      </div>
      
      <button
        type="submit"
        className="
          w-[250px]
          h-[36px]
          text-l
          font-semibold
          bg-[#4B7EFF]
          text-white
          rounded-[30px]
          cursor-pointer 
          font-pretendard
        "
      >
        GIST 메일로 시작하기
      </button>
      
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
