import { createFileRoute, useRouter } from '@tanstack/react-router';
import Layout from '../component/Layout';
import React from 'react';
import { publishPost } from '../api/post/publishPost';
export const Route = createFileRoute('/write')({
  component: WriteComponent,
});

function WriteComponent() {
  const router = useRouter();

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [type, setType] = React.useState('');
  const [maxParticipants, setMaxParticipants] = React.useState('');
  const [deadline, setDeadline] = React.useState('');

  const submitPublish = async (e) => {
    e.preventDefault();
    const res = await publishPost(title, content, type, maxParticipants, deadline);
    router.navigate({
      to: `/post`,
      search: { uuid: res.uuid },
    });
  };

  return (
    <Layout>
      <form
        className="
        max-w-[500px] 
        mx-auto 
        flex 
        flex-col 
        gap-3.5
      "
      >
        <h1
          className="
          text-[26px] 
          font-bold 
          mb-2
        "
        >
          게시글 작성
        </h1>
        <label
          className="
          font-medium 
          text-[15px]
        "
        >
          제목
          <p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                w-full 
                text-[15px] 
                p-1.5 
                rounded-md 
                border-2 
                border-gray-800 
                mt-1
              "
            />
          </p>
        </label>
        <label
          className="
          font-medium 
          text-[15px]
        "
        >
          인원
          <p>
            <input
              value={maxParticipants}
              onChange={(e) => setMaxParticipants(e.target.value)}
              type="number"
              className="
                w-[120px] 
                text-[15px] 
                p-1.5 
                rounded-md 
                border-2 
                border-gray-800 
                mt-1
              "
            />
          </p>
        </label>
        <label
          className="
          font-medium 
          text-[15px]
        "
        >
          기간
          <p>
            <input
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              type="text"
              className="
                w-[120px] 
                text-[15px] 
                p-1.5 
                rounded-md 
                border-2 
                border-[#4B7EFF]
                bg-[#E5EDFA]
                mt-1
              "
            />
          </p>
        </label>
        <label
          className="
          font-medium 
          text-[15px]
        "
        >
          내용
          <p>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="
                w-full 
                text-[15px] 
                p-1.5 
                rounded-lg 
                border-2 
                border-gray-800 
                mt-1 
                resize-y
              "
            />
          </p>
        </label>
        <label
          className="
          font-medium 
          text-[15px]
        "
        >
          이미지 추가
          <p>
            <input
              type="file"
              className="
                w-full 
                text-[15px] 
                p-1.5 
                rounded-md 
                border-2 
                border-gray-800 
                mt-1
              "
            />
          </p>
        </label>
        <label
          className="
          font-medium 
          text-[15px]
        "
        >
          분류 태그
          <p>
            <input
              value={type}
              onChange={(e) => setType(e.target.value)}
              type="text"
              className="
                w-[120px] 
                text-[15px] 
                p-1.5 
                rounded-md 
                border-2 
                border-[#4B7EFF]
                bg-[#E5EDFA]
                mt-1
              "
            />
          </p>
        </label>

        <div
          className="
          flex
          justify-center
          items-center"
        >
          <button
            onClick={submitPublish}
            type="submit"
            className="
          w-[260px]
            mt-3.5 
            bg-[#4B7EFF]
            text-white 
            text-[15px] 
            border-none 
            rounded-lg 
            py-2.5 
            font-medium 
            cursor-pointer
          "
          >
            작성/수정완료
          </button>
        </div>
      </form>
    </Layout>
  );
}
