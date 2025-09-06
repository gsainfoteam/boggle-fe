import { createFileRoute, useRouter } from '@tanstack/react-router';
import Layout from '../component/Layout';
import React, { useEffect } from 'react';
import { getPost } from '../api/post/getPost';
import { joinPost } from '../api/post/joinPost';

export default function Post() {
  const router = useRouter();
  const uuid = Route.useSearch().uuid;

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [type, setType] = React.useState('');
  const [tags, setTags] = React.useState([]);
  const [author, setAuthor] = React.useState('');
  const [createdAt, setCreatedAt] = React.useState('');
  const [participants, setParticipants] = React.useState([{ uuid: '', name: '' }]);
  const [maxParticipants, setMaxParticipants] = React.useState(0);
  const [deadline, setDeadline] = React.useState('0000년 00월 00일');

  useEffect(() => {
    getPost(uuid).then((post) => {
      setTitle(post.title);
      setContent(post.content);
      setType(post.type);
      setTags(post.tags);
      setAuthor(post.author);
      setImage(post.image);
      const createDate = new Date(post.createdAt);
      setCreatedAt(`${createDate.getFullYear()}년 ${createDate.getMonth() + 1}월 ${createDate.getDate()}일`);
      setParticipants(post.participants);
      setMaxParticipants(post.maxParticipants);
      const deadlineDate = new Date(post.deadline);
      setDeadline(`${deadlineDate.getFullYear()}년 ${deadlineDate.getMonth() + 1}월 ${deadlineDate.getDate()}일`);
    });
  });

  const handleJoinPost = async (e) => {
    e.preventDefault();
    joinPost(uuid);
  };

  return (
    <Layout>
      <form className="max-w-[500px] mx-auto flex flex-col gap-3.5">
        <div className="bg-gray-300 h-[250px] w-full rounded-[15px]"/>
        <div>
          <h1
            className="
          text-[30px] 
          font-bold 
          mb-2
            "
          >
            {title}
          </h1>
          <div
            className="
            flex 
            items-center
            text-[15px] 
           
            font-medium"
          >
            {author} | {createdAt} |
            <div
              className="
            flex
            gap-[5px]
            ml-[5px]"
            >
              <button
                className="
                bg-[#4B7EFF]
                text-white
                font-bold
                rounded-[5px]
                py-[2px]
                px-[5px]
                "
              >
                #{type}
              </button>
              {tags.map((tag) => (
                <button
                  className="
                bg-[#4B7EFF]
                text-white
                font-bold
                rounded-[5px]
                py-[2px]
                px-[5px]
                "
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          <div
            className="
            flex
            items-center
            gap-[10px]"
          >
            <img
              src="/post icons/user.svg"
              alt="login profile"
              className="
            h-[20px]
            w-[20px]
            object-contain
            block
          "
            />
            {participants.length}/{maxParticipants}
          </div>
          <div
            className="
            flex
            items-center
            gap-[10px]"
          >
            <img
              src="/post icons/calendar.svg"
              alt="login profile"
              className="
            h-[20px]
            w-[20px]
            object-contain
            block
          "
            />
            {createdAt} ~ {deadline}
          </div>
        </div>
        <div>
          <h2
            className="
          text-[25px] 
          font-semibold
        "
          >
            세부 내용
          </h2>
          <label
            className="
          font-medium 
          text-[15px]
        "
          >
            {content}
          </label>
        </div>

        <div>
          <h2
            className="
          text-[25px] 
          font-semibold
        "
          >
            참여자
          </h2>

          <div
            className="
        bg-white
        h-[250px]
        w-full
        rounded-[15px]
        flex
        gap-[5px]
      "
          >
            <div
              key={participants[0].uuid}
              onClick={() => {
                router.navigate({
                  to: `/user`,
                  search: { uuid: participants[0].uuid },
                });
              }}
              className="
            bg-[#E5EDFA]
            h-[66px]
            w-[59px]
            rounded-[7.6px]
            flex
            flex-col
            gap-[2px]
            items-center
            justify-center
        "
            >
              <div
                className="
                    bg-white
                    h-[43px]
                    w-[43px]
                    rounded-full

                    "
              />
              <div
                className="
                text-[8px]"
              >
                {participants[0].name}
              </div>
            </div>
            {participants.slice(1).map((participant) => (
              <div
                key={participant.uuid}
                onClick={() => {
                  router.navigate({
                    to: `/user`,
                    search: { uuid: participant.uuid },
                  });
                }}
                className="
            bg-[#D9D9D9]
            h-[66px]
            w-[59px]
            rounded-[7.6px]
            flex
            flex-col
            gap-[2px]
            items-center
            justify-center
        "
              >
                <div
                  className="
                    bg-white
                    h-[43px]
                    w-[43px]
                    rounded-full

                    "
                />
                <div
                  className="
                text-[8px]"
                >
                  {participant.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleJoinPost}
          className="
            mt-3.5 
            bg-blue-500 
            text-white 
            text-[15px] 
            border-none 
            rounded-lg 
            py-2.5 
            font-medium 
            cursor-pointer
          "
        >
          참여하기
        </button>
      </form>
    </Layout>
  );
}

export const Route = createFileRoute('/post')({
  component: Post,
  validateSearch: (search) => ({ uuid: search.uuid }),
});
