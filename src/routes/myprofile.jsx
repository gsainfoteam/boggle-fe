import { createFileRoute } from "@tanstack/react-router";
import Layout from "../component/Layout";

export const Route = createFileRoute("/myProfile")({
  component: MyProfileComponent,
});

function MyProfileComponent() {
  // 더미 데이터 추가
  const dummyPosts = [
    {
      id: 1,
      title: "긴급한 설명",
      content: "간략한 설명",
      type: "공동구매",
      participants: new Array(3),
      maxParticipants: 5,
    },
    {
      id: 2,
      title: "긴급한 설명",
      content: "간략한 설명",
      type: "공동구매",
      participants: new Array(2),
      maxParticipants: 5,
    },
    {
      id: 3,
      title: "긴급한 설명",
      content: "간략한 설명",
      type: "공동구매",
      participants: new Array(4),
      maxParticipants: 5,
    },
    {
      id: 4,
      title: "긴급한 설명",
      content: "간략한 설명",
      type: "공동구매",
      participants: new Array(1),
      maxParticipants: 5,
    },
  ];

  return (
    <Layout>
      <style>{`
        main {
          overflow: hidden !important;
        }
      `}</style>
      <div
        className="
          flex 
          flex-col 
          h-[calc(100vh-110px)] 
          w-full 
          overflow-hidden
          bg-amber-700
        "
      >
        {/* 상단 프로필 영역 */}
        <div
          className="
            flex 
            items-start 
            gap-12 
            px-16 
            pt-12 
            pb-8 
            bg-white 
            sticky 
            top-0 
            z-10
          "
          style={{ minHeight: 200 }}
        >
          {/* 프로필 이미지 */}
          <div
            className="
              flex 
              flex-col 
              items-center
            "
          >
            <div
              className="
                w-36 
                h-36 
                bg-gray-200 
                rounded-full 
                mb-2
              "
            />
          </div>
          {/* 프로필 정보 */}
          <div
            className="
              flex 
              flex-col 
              justify-center 
              min-w-[180px]
            "
          >
            <div
              className="
                font-bold 
                text-xl 
                mb-1
              "
            >
              NAME
            </div>
            <div
              className="
                text-base 
                font-normal
              "
            >
              학번
            </div>
            <div
              className="
                text-base 
                font-normal
              "
            >
              학과
            </div>
            <div
              className="
                text-base 
                font-normal
              "
            >
              이메일
            </div>
          </div>
          {/* 좋아요(하트) */}
          <div
            className="
              flex 
              flex-col 
              items-center 
              ml-auto 
              mr-8
            "
          >
            <span
              className="
                text-4xl 
                mb-1
              "
            >
              ♡
            </span>
            <span
              className="
                text-lg
              "
            >
              5
            </span>
          </div>
        </div>
        {/* 하단 이전 게시물 영역 (스크롤) */}
        <div
          className="
            flex-1 
            overflow-y-auto 
            px-16 
            bg-white
          "
        >
          <div
            className="
              font-bold 
              text-2xl 
              mb-6 
              mt-2
            "
          >
            이전 게시물
          </div>
          <div
            className="
              grid 
              grid-cols-2 
              gap-8
            "
          >
            {dummyPosts.map((post) => (
              <div
                key={post.id}
                className="
                  bg-white 
                  rounded-xl 
                  shadow-sm 
                  p-4 
                  min-h-[180px] 
                  flex 
                  flex-col 
                  gap-2
                "
              >
                <div
                  className="
                    bg-gray-300 
                    h-[100px] 
                    rounded-lg 
                    mb-2
                  "
                />
                <div
                  className="
                    font-bold 
                    text-green-600
                  "
                >
                  ● {post.title}
                </div>
                <div>{post.content}</div>
                <div>
                  <span
                    className="
                      bg-blue-400 
                      text-white 
                      rounded 
                      px-2 
                      py-0.5 
                      text-xs 
                      mr-2
                    "
                  >
                    #{post.type}
                  </span>
                  <span
                    className="
                      text-xs
                    "
                  >
                    👤 {post.participants.length}/{post.maxParticipants}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
