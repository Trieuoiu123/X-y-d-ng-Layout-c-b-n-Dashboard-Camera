function MainContent() {
  // Style cho cái khung (Card)
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px", // Bo góc tròn 
    padding: "24px", // Khoảng cách từ chữ đến viền khung
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)", // Đổ bóng nhẹ
    border: "1px solid #e0e0e0", // Viền mờ
    width: "90%",
    maxWidth: "1800px", // Giới hạn độ rộng của khung
    height: "700px", // Chiều cao cố định cho khung
    margin: "0 auto", // Căn cái khung ra chính giữa vùng MainContent
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={{ padding: "20px" }}>
      {" "}
      {/* Vùng đệm ngoài cùng */}
      <div style={cardStyle}>
        <h3
          style={{
            marginTop: 0,
            color: "#1a73e8",
          }}
        >
          Thông tin hệ thống
        </h3>
        <hr style={{ border: "0.5px solid #eee", margin: "15px 0" }} />

        <p>Đây là nội dung nằm bên trong khung.</p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        ></div>
      </div>
    </div>
  );
}

// Style phụ cho nút bấm
const btnStyle = {
  padding: "8px 16px",
  backgroundColor: "#1a73e8",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default MainContent;
