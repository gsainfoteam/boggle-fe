import { useRouter } from '@tanstack/react-router';

export default function Card({ post }) {
  const router = useRouter();

  return (
    <div
      key={post.uuid}
      onClick={() => {
        router.navigate({
          to: `/post`,
          search: { uuid: post.uuid },
        });
      }}
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
  );
}
