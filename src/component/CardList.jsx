import Card from "./Card";

const dummy = Array(9).fill(0);

export default function CardList() {
  return (
    <div
      className="
      grid 
      grid-cols-[repeat(auto-fit,minmax(240px,1fr))] 
      gap-6 
      w-full 
      box-border
    "
    >
      {dummy.map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}
