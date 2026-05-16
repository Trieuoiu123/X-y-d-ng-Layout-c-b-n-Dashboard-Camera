import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import công cụ Route
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CameraList from "./pages/CameraList"; // File MainContent cũ đổi tên thành CameraList
import CameraDetail from "./pages/CameraDetail"; // File mới chuẩn bị tạo

function App() {
  const [activeMenu, setActiveMenu] = useState("Camera");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Header activePage={activeMenu} />

        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#f0f2f5" }}>
          {/* Thay vì gọi cứng <MainContent />, ta dùng Routes để điều hướng */}
          <Routes>
            {/* Tự động chuyển hướng từ trang chủ vào /cameras */}
            {/* Đặt trang Tổng quan làm trang mặc định khi vừa vào web */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cameras" element={<CameraList />} />
            <Route path="/cameras/:id" element={<CameraDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
