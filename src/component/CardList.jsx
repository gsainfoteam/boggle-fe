import Card from "./Card";

const dummy = Array(9).fill(0);

export default function CardList() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 24,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {dummy.map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}
