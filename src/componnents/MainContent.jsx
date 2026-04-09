import { useState } from "react";
import CameraCard from "./CameraCard"; // Import component thẻ Camera
import camerasData from "../data/cameras.json"; // Import dữ liệu giả (kiểm tra lại đường dẫn nếu file của bạn để chỗ khác)

function MainContent() {
  // State để lưu trữ từ khóa tìm kiếm và bộ lọc trạng thái
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Xử lý logic lọc danh sách camera
  const filteredCameras = camerasData.filter((cam) => {
    // Lọc theo tên (chuyển cả 2 về chữ thường để so sánh chính xác)
    const matchName = cam.name.toLowerCase().includes(search.toLowerCase());
    // Lọc theo trạng thái (nếu chọn 'all' thì bỏ qua, ngược lại phải khớp trạng thái)
    const matchStatus = filter === "all" || cam.status === filter;

    return matchName && matchStatus;
  });

  return (
    <div style={{ padding: "20px" }}>
      {/* KHUNG ĐIỀU KHIỂN (Tiêu đề, Search, Filter) */}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          marginBottom: "20px",
          border: "1px solid #e0e0e0",
        }}
      >
        <h3 style={{ marginTop: 0, color: "#1a73e8", fontSize: "18px" }}>
          Quản lý Camera
        </h3>
        <hr style={{ border: "0.5px solid #eee", margin: "15px 0" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
            flexWrap: "wrap", // Tự động rớt dòng nếu màn hình nhỏ
          }}
        >
          {/* Ô nhập tìm kiếm */}
          <input
            type="text"
            placeholder="Tìm kiếm camera theo tên..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px 15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              flex: 1,
              minWidth: "250px",
              outline: "none",
            }}
          />

          {/* Dropdown lọc trạng thái */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{
              padding: "10px 15px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              minWidth: "160px",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="online">🟢 Online</option>
            <option value="offline">🔴 Offline</option>
          </select>
        </div>
      </div>

      {/* DANH SÁCH THẺ CAMERA (Grid Layout) */}
      {filteredCameras.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", // CSS Grid tự động chia cột mượt mà
            gap: "20px",
          }}
        >
          {filteredCameras.map((cam) => (
            // Gọi Component CameraCard và truyền dữ liệu từng camera vào
            <CameraCard key={cam.id} camera={cam} />
          ))}
        </div>
      ) : (
        // Hiển thị nếu tìm kiếm không ra kết quả nào
        <div
          style={{
            textAlign: "center",
            padding: "60px",
            backgroundColor: "white",
            borderRadius: "12px",
            color: "#888",
            border: "1px dashed #ccc",
          }}
        >
          Không tìm thấy camera nào phù hợp với yêu cầu lọc của bạn.
        </div>
      )}
    </div>
  );
}

export default MainContent;
