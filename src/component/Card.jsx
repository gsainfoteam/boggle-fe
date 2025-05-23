export default function Card() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 1px 4px #0001",
        padding: 16,
        minHeight: 180,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div
        style={{
          background: "#ddd",
          height: 100,
          borderRadius: 8,
          marginBottom: 8,
        }}
      />
      <div style={{ fontWeight: "bold", color: "#1a1" }}>● 제목</div>
      <div>간략한 설명</div>
      <div>
        <span
          style={{
            background: "#4af",
            color: "#fff",
            borderRadius: 4,
            padding: "2px 8px",
            fontSize: 12,
            marginRight: 8,
          }}
        >
          #공동구매
        </span>
        <span style={{ fontSize: 12 }}>👤 NN/NN</span>
      </div>
    </div>
  );
}
