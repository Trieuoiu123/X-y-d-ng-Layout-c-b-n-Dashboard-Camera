const CameraCard = ({ camera }) => {
  const isOnline = camera.status === "online";

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        // Đã xóa các ký tự lỗi ở dòng dưới này
        borderTop: `4px solid ${isOnline ? "#4CAF50" : "#F44336"}`,
      }}
    >
      {/* Thumbnail giả */}
      <div
        style={{
          height: "150px",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
        }}
      >
        [Ảnh camera]
      </div>

      <div style={{ padding: "15px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "5px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: isOnline ? "#4CAF50" : "#F44336",
            }}
          />
          <span
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              color: isOnline ? "#4CAF50" : "#F44336",
            }}
          >
            {camera.status.toUpperCase()}
          </span>
        </div>

        <h4 style={{ margin: "0 0 5px 0", fontSize: "16px" }}>{camera.name}</h4>
        <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>
          {camera.location}
        </p>
      </div>
    </div>
  );
};

// ĐỪNG QUÊN DÒNG NÀY ĐỂ CÁC FILE KHÁC CÓ THỂ IMPORT ĐƯỢC
export default CameraCard;
