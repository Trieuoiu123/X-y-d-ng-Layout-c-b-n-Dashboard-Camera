import { useState } from "react";

function Sidebar({ activeMenu, setActiveMenu }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Mình đổi icon thành các hình học cơ bản
  const menuItems = [
    { name: "Tổng quan", icon: "■" },
    { name: "Camera", icon: "◈" },
    { name: "Sự kiện", icon: "●" },
    { name: "Cảnh báo", icon: "▲" },
    { name: "Cài đặt", icon: "⚙" },
  ];

  // Bảng màu chuẩn trích xuất 
  const colors = {
    sidebarBg: "#2a3042", // Màu nền tổng thể của Sidebar
    brandBg: "#222736", // Màu nền đậm hơn của ô SENTINEL
    brandText: "#556ee6", // Chữ SENTINEL màu xanh sáng
    activeBg: "#32394e", // Màu nền khi menu được chọn
    activeBorder: "#556ee6", // Vạch dọc màu xanh bên trái
    textNormal: "#a6b0cf", // Chữ màu xám cho menu chưa chọn
    textActive: "#ffffff", // Chữ màu trắng cho menu đang chọn
  };

  return (
    <aside
      style={{
        width: isCollapsed ? "70px" : "250px",
        backgroundColor: colors.sidebarBg,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.3s ease",
        padding: 0, // Ép padding về 0 để mọi thứ tràn ra sát mép
        overflow: "hidden",
      }}
    >
      {/* 1. KHỐI SENTINEL */}
      <div
        style={{
          backgroundColor: colors.brandBg,
          width: "100%",
          padding: isCollapsed ? "25px 0" : "25px 20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: isCollapsed ? "center" : "flex-start",
          boxSizing: "border-box", // Đảm bảo padding không làm phình khối này
        }}
      >
        <span
          style={{
            color: colors.brandText,
            fontWeight: "bold",
            fontSize: isCollapsed ? "12px" : "18px",
            letterSpacing: "1px",
          }}
        >
          SENTINEL
        </span>
        {!isCollapsed && (
          <span
            style={{
              color: colors.textNormal,
              fontSize: "12px",
              marginTop: "4px",
            }}
          >
            Camera System
          </span>
        )}
      </div>

      {/* 2. DANH SÁCH MENU */}
      <div style={{ flex: 1, paddingTop: "10px" }}>
        {menuItems.map((item) => {
          const isActive = activeMenu === item.name;
          return (
            <div
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px 20px",
                cursor: "pointer",
                //Phủ màu nền 100% thay vì làm bo góc nhỏ bé như trước
                backgroundColor: isActive ? colors.activeBg : "transparent",
                color: isActive ? colors.textActive : colors.textNormal,
                //Tạo vạch dọc bên trái
                borderLeft: isActive
                  ? `4px solid ${colors.activeBorder}`
                  : "4px solid transparent",
                transition: "all 0.2s",
                width: "100%",
                boxSizing: "border-box",
                justifyContent: isCollapsed ? "center" : "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  marginRight: isCollapsed ? "0" : "15px",
                }}
              >
                {item.icon}
              </span>
              {!isCollapsed && (
                <span
                  style={{
                    fontWeight: isActive ? "500" : "normal",
                    fontSize: "15px",
                  }}
                >
                  {item.name}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* 3. NÚT THU GỌN */}
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        style={{
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          color: colors.textNormal,
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      >
        {isCollapsed ? "➡️" : "⬅️ Thu gọn"}
      </div>
    </aside>
  );
}

export default Sidebar;
