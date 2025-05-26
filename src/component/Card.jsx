export default function Card() {
  return (
    <div
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
        ● 제목
      </div>
      <div>간략한 설명</div>
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
          #공동구매
        </span>
        <span
          className="
          text-xs
        "
        >
          👤 NN/NN
        </span>
      </div>
    </div>
  );
}
