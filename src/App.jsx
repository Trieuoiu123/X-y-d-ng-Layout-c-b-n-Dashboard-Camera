import { useState } from "react";
import Header from "./componnents/Header";
import Sidebar from "./componnents/Sidebar";
import MainContent from "./componnents/MainContent";

function App() {
  const [activeMenu, setActiveMenu] = useState("Tổng quan");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* 1. Sidebar bên trái:cao 100% màn hình */}
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      {/* 2. Vùng bên phải: Xếp theo chiều dọc (Header trên, Content dưới) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflow: "hidden",
        }}
      >
        {/* Header nằm trong vùng bên phải này */}
        <Header activePage={activeMenu} />

        {/* Nội dung chính nằm dưới Header */}
        <div style={{ flex: 1, overflowY: "auto", backgroundColor: "#f0f2f5" }}>
          <MainContent />
        </div>
      </div>
    </div>
  );
}
export default App;
