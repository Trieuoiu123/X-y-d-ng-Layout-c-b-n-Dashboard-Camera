import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import data from "../data/dashboard.json";

function Dashboard() {
  // Dữ liệu cho biểu đồ tròn
  const pieData = [
    { name: "Online", value: data.stats.onlineCameras },
    { name: "Offline", value: data.stats.offlineCameras },
  ];
  const COLORS = ["#4CAF50", "#F44336"]; // Xanh lá, Đỏ

  return (
    <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
      {/* HÀNG 1: 4 THẺ THỐNG KÊ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <StatCard
          title="Tổng Camera"
          value={data.stats.totalCameras}
          subtitle="▲ 2 so với tháng trước"
          color="#3A7BD5"
        />
        <StatCard
          title="Đang Online"
          value={data.stats.onlineCameras}
          subtitle="85.7% hoạt động"
          color="#4CAF50"
        />
        <StatCard
          title="Sự kiện hôm nay"
          value={data.stats.eventsToday}
          subtitle="▲ 12 so với hôm qua"
          color="#FF6B35"
        />
        <StatCard
          title="Cảnh báo"
          value={data.stats.alertsUnread}
          subtitle="● 1 chưa xử lý"
          color="#F44336"
        />
      </div>

      {/* HÀNG 2: 2 BIỂU ĐỒ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* Biểu đồ Cột */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}
        >
          <h4 style={{ margin: "0 0 5px 0", color: "#333" }}>
            Sự kiện 7 ngày gần nhất
          </h4>
          <p style={{ margin: "0 0 20px 0", fontSize: "13px", color: "#888" }}>
            Biểu đồ cột — theo ngày
          </p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data.weeklyEvents}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip cursor={{ fill: "#f5f5f5" }} />
              <Bar dataKey="count" fill="#3A7BD5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Biểu đồ Tròn */}
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}
        >
          <h4 style={{ margin: "0 0 20px 0", color: "#333" }}>
            Trạng thái camera
          </h4>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                stroke="none"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* HÀNG 3: BẢNG SỰ KIỆN GẦN NHẤT */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          overflow: "hidden",
        }}
      >
        <h4
          style={{
            margin: "0",
            padding: "20px",
            color: "#333",
            borderBottom: "1px solid #eee",
          }}
        >
          Sự kiện gần nhất
        </h4>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#f8f9fa",
                  color: "#888",
                  fontSize: "13px",
                }}
              >
                <th style={{ padding: "12px 20px", fontWeight: "normal" }}>
                  Giờ
                </th>
                <th style={{ padding: "12px 20px", fontWeight: "normal" }}>
                  Camera
                </th>
                <th style={{ padding: "12px 20px", fontWeight: "normal" }}>
                  Loại sự kiện
                </th>
                <th style={{ padding: "12px 20px", fontWeight: "normal" }}>
                  Mức độ
                </th>
              </tr>
            </thead>
            <tbody>
              {data.recentEvents.map((ev, idx) => (
                <tr
                  key={ev.id}
                  style={{
                    backgroundColor: idx % 2 === 0 ? "white" : "#f8f9fa",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <td
                    style={{
                      padding: "12px 20px",
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    {ev.time}
                  </td>
                  <td
                    style={{
                      padding: "12px 20px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {ev.camera}
                  </td>
                  <td style={{ padding: "12px 20px", fontSize: "14px" }}>
                    {ev.type}
                  </td>
                  <td style={{ padding: "12px 20px" }}>
                    <span
                      style={{
                        backgroundColor:
                          ev.level === "warning" ? "#FF6B35" : "#3A7BD5",
                        color: "white",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "bold",
                      }}
                    >
                      {ev.level.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Component Thẻ thống kê (StatCard) để tái sử dụng
const StatCard = ({ title, value, subtitle, color }) => (
  <div
    style={{
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      borderTop: `4px solid ${color}`,
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    }}
  >
    <div style={{ fontSize: "13px", color: "#888", marginBottom: "10px" }}>
      {title}
    </div>
    <div
      style={{
        fontSize: "28px",
        fontWeight: "bold",
        color: color,
        marginBottom: "10px",
      }}
    >
      {value}
    </div>
    <div style={{ fontSize: "12px", color: "#666" }}>{subtitle}</div>
  </div>
);

export default Dashboard;
