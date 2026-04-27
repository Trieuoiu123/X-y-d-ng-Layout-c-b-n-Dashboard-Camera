import { useNavigate } from "react-router-dom"; // BẮT BUỘC PHẢI CÓ DÒNG NÀY ĐỂ CHUYỂN TRANG

const CameraCard = ({ camera }) => {
  const isOnline = camera.status === "online";
  const isOutdoor = camera.zone === "Ngoài trời";
  const navigate = useNavigate(); // KHỞI TẠO CÔNG CỤ CHUYỂN TRANG

  return (
    <div
      // SỰ KIỆN CLICK Ở ĐÂY SẼ GỌI LỆNH CHUYỂN URL
      onClick={() => navigate(`/cameras/${camera.id}`)}
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        borderTop: `4px solid ${isOnline ? "#4CAF50" : "#F44336"}`,
        cursor: "pointer", // Biến con trỏ chuột thành hình bàn tay khi trỏ vào thẻ
        transition: "transform 0.2s",
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
        {/* Trạng thái Online/Offline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "8px",
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

        {/* Tên Camera */}
        <h4 style={{ margin: "0 0 8px 0", fontSize: "16px", color: "#333" }}>
          {camera.name}
        </h4>

        {/* Vị trí và Khu vực (Zone) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              color: "#666",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            📍 {camera.location}
          </p>

          <span
            style={{
              fontSize: "11px",
              padding: "4px 8px",
              borderRadius: "12px",
              fontWeight: "500",
              backgroundColor: isOutdoor ? "#fff3e0" : "#e3f2fd",
              color: isOutdoor ? "#e65100" : "#1565c0",
            }}
          >
            {isOutdoor ? "☀️ " : "🏠 "} {camera.zone}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CameraCard;
