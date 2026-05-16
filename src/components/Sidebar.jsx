import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ activeMenu, setActiveMenu }) {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Thêm thuộc tính 'path' vào mỗi item để biết nút nào sẽ chuyển sang link nào
  const menuItems = [
    { name: "Tổng quan", icon: "■", path: "/" },
    { name: "Camera", icon: "◈", path: "/cameras" },
    { name: "Sự kiện", icon: "●", path: "/events" }, // Các trang này nếu chưa có component sẽ hiện trắng hoặc báo lỗi 404 tùy cấu hình, bạn có thể tạo sau
    { name: "Cảnh báo", icon: "▲", path: "/alerts" },
    { name: "Cài đặt", icon: "⚙", path: "/settings" },
  ];

  // Bảng màu chuẩn trích xuất
  const colors = {
    sidebarBg: "#2a3042",
    brandBg: "#222736",
    brandText: "#556ee6",
    activeBg: "#32394e",
    activeBorder: "#556ee6",
    textNormal: "#a6b0cf",
    textActive: "#ffffff",
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
        padding: 0,
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
          boxSizing: "border-box",
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
              onClick={() => {
                // KHI CLICK: Vừa đổi màu menu đang chọn, vừa chuyển đường dẫn URL
                setActiveMenu(item.name);
                navigate(item.path);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px 20px",
                cursor: "pointer",
                backgroundColor: isActive ? colors.activeBg : "transparent",
                color: isActive ? colors.textActive : colors.textNormal,
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
