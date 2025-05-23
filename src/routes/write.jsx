import { createFileRoute } from "@tanstack/react-router";
import Layout from "../component/Layout";
import React from "react";

export const Route = createFileRoute("/write")({
  component: WriteComponent,
});

function WriteComponent() {
  return (
    <Layout>
      <form
        style={{
          maxWidth: 420,
          margin: "40px auto 0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <h1 style={{ fontSize: 26, fontWeight: 700, marginBottom: 8 }}>
          게시글 작성
        </h1>
        <label style={{ fontWeight: 500, fontSize: 15 }}>
          제목
          <p>
            <input
              type="text"
              style={{
                width: "100%",
                fontSize: 15,
                padding: 5,
                borderRadius: 6,
                border: "2px solid #222",
                marginTop: 4,
              }}
            />
          </p>
        </label>
        <label style={{ fontWeight: 500, fontSize: 15 }}>
          인원
          <p>
            <input
              type="number"
              style={{
                width: 70,
                fontSize: 15,
                padding: 5,
                borderRadius: 6,
                border: "2px solid #222",
                marginTop: 4,
              }}
            />
          </p>
        </label>
        <label style={{ fontWeight: 500, fontSize: 15 }}>
          기간
          <p>
            <input
              type="text"
              style={{
                width: 90,
                fontSize: 15,
                padding: 5,
                borderRadius: 6,
                border: "2px solid #7da6ff",
                marginTop: 4,
              }}
            />
          </p>
        </label>
        <label style={{ fontWeight: 500, fontSize: 15 }}>
          내용
          <p>
            <textarea
              rows={6}
              style={{
                width: "100%",
                fontSize: 15,
                padding: 7,
                borderRadius: 8,
                border: "2px solid #222",
                marginTop: 4,
                resize: "vertical",
              }}
            />
          </p>
        </label>
        <label style={{ fontWeight: 500, fontSize: 15 }}>
          이미지 추가
          <p>
            <input
              type="text"
              style={{
                width: "100%",
                fontSize: 15,
                padding: 5,
                borderRadius: 6,
                border: "2px solid #222",
                marginTop: 4,
              }}
            />
          </p>
        </label>
        <label style={{ fontWeight: 500, fontSize: 15 }}>
          분류 태그
          <p>
            <input
              type="text"
              style={{
                width: 100,
                fontSize: 15,
                padding: 5,
                borderRadius: 6,
                border: "2px solid #7da6ff",
                marginTop: 4,
              }}
            />
          </p>
        </label>
        <button
          type="submit"
          style={{
            marginTop: 14,
            background: "#4a90ff",
            color: "#fff",
            fontSize: 15,
            border: "none",
            borderRadius: 8,
            padding: "10px 0",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          작성/수정완료
        </button>
      </form>
    </Layout>
  );
}
