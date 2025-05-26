import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
});

function LoginComponent() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f9fa",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <img
            src="/logo.png"
            alt="logo"
            style={{ height: 40, marginRight: 8 }}
          />
          <h1 style={{ fontSize: 32, margin: 0 }}>BOGGLE</h1>
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: 360,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <input
            type="text"
            placeholder="아이디"
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: 15,
              border: "1px solid #ddd",
              borderRadius: 8,
              background: "#fff",
            }}
          />
          <input
            type="password"
            placeholder="비밀번호"
            style={{
              width: "100%",
              padding: "12px 16px",
              fontSize: 15,
              border: "1px solid #ddd",
              borderRadius: 8,
              background: "#fff",
            }}
          />
          <button
            style={{
              width: "100%",
              padding: "12px",
              fontSize: 15,
              background: "#4a90ff",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              marginTop: 4,
            }}
          >
            로그인
          </button>
          <button
            style={{
              width: "100%",
              padding: "12px",
              fontSize: 15,
              background: "#f8f9fa",
              border: "1px solid #ddd",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
