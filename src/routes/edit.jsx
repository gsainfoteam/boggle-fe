import { createFileRoute, useRouter } from '@tanstack/react-router';
import Layout from '../component/Layout';
import React, { useEffect } from 'react';
import { editPost } from '../api/post/editPost';
import { getPost } from '../api/post/getPost';

export const Route = createFileRoute('/edit')({
  component: EditComponent,
  validateSearch: (search) => ({ uuid: search.uuid }),
});

function EditComponent() {
  const router = useRouter();
  const uuid = Route.useSearch().uuid;

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [type, setType] = React.useState('');
  const [maxParticipants, setMaxParticipants] = React.useState('');
  const [deadline, setDeadline] = React.useState('');

  useEffect(() => {
    getPost(uuid).then((post) => {
      setTitle(post.title);
      setContent(post.content);
      setType(post.type);
      setMaxParticipants(post.maxParticipants);
      const deadlineDate = new Date(post.deadline);
      setDeadline(`${deadlineDate.getFullYear()}-${deadlineDate.getMonth() + 1}-${deadlineDate.getDate()}`);
    });
  }, [uuid]);

  const submitPublish = async (e) => {
    e.preventDefault();
    const res = await editPost(uuid, title, content, type, maxParticipants, deadline);
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
            수정하기
          </button>
        </div>
      </form>
    </Layout>
  );
}
