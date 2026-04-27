import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import camerasData from "../data/cameras.json";

function CameraDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const camera = camerasData.find((c) => c.id === parseInt(id));

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleString("vi-VN"),
  );

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentTime(new Date().toLocaleString("vi-VN")),
      1000,
    );
    return () => clearInterval(timer);
  }, []);

  if (!camera)
    return <div style={{ padding: "20px" }}>Không tìm thấy camera</div>;

  const isOnline = camera.status === "online";

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* NÚT BACK & BREADCRUMB */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => navigate("/cameras")}
          style={{
            padding: "6px 15px",
            cursor: "pointer",
            borderRadius: "6px",
            border: "1px solid #ccc",
            backgroundColor: "white",
          }}
        >
          ← Back
        </button>
        <div>
          <h2 style={{ margin: 0, fontSize: "20px" }}>
            Camera / Chi tiết Camera
          </h2>
          <div style={{ fontSize: "13px", color: "#888", marginTop: "4px" }}>
            Hệ thống / Camera / {camera.name}
          </div>
        </div>
      </div>

      {/* LAYOUT 2 CỘT */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* CỘT TRÁI (Video + 4 thẻ thông tin) */}
        <div
          style={{
            flex: 2,
            minWidth: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* 1. Thumbnail Live Feed */}
          <div
            style={{
              backgroundColor: "#1a1a2e",
              height: "350px",
              borderRadius: "12px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                backgroundColor: "red",
                color: "white",
                padding: "4px 10px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              🔴 LIVE
            </div>

            <h3 style={{ margin: 0, color: "#4a9eff", fontSize: "24px" }}>
              [ Live Feed ]
            </h3>
            <p style={{ margin: "8px 0 0 0", color: "#888", fontSize: "14px" }}>
              {camera.name}
            </p>

            <div
              style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
                color: "#888",
                fontSize: "12px",
              }}
            >
              {currentTime}
            </div>
          </div>

          {/* 2. 4 Thẻ thông tin 2x2 */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <InfoCard
              label="Trạng thái"
              value={camera.status.toUpperCase()}
              valueColor={isOnline ? "#4CAF50" : "#F44336"}
            />
            <InfoCard label="Thời gian HĐ" value={camera.uptime || "N/A"} />
            <InfoCard label="Khu vực" value={camera.location} />
            <InfoCard label="Loại" value={camera.zone} />
          </div>
        </div>

        {/* CỘT PHẢI (Bảng sự kiện) */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #e0e0e0",
          }}
        >
          <h4
            style={{
              margin: "0 0 15px 0",
              color: "#666",
              fontSize: "13px",
              letterSpacing: "1px",
            }}
          >
            SỰ KIỆN GẦN ĐÂY
          </h4>

          {!camera.events || camera.events.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px 0",
                color: "#888",
                fontSize: "14px",
              }}
            >
              Chưa có sự kiện nào
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {camera.events.map((ev, idx) => {
                const badgeColor =
                  ev.level === "warning"
                    ? "#FF6B35"
                    : ev.level === "info"
                      ? "#3A7BD5"
                      : "#999";

                return (
                  <div
                    key={ev.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 10px",
                      backgroundColor: idx % 2 === 0 ? "#f8f9fa" : "white",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}
                    >
                      <span style={{ fontSize: "11px", color: "#888" }}>
                        {ev.time}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#333",
                          fontWeight: "500",
                        }}
                      >
                        {ev.type}
                      </span>
                    </div>
                    <span
                      style={{
                        backgroundColor: badgeColor,
                        color: "white",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: "bold",
                      }}
                    >
                      {ev.level.toUpperCase()}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const InfoCard = ({ label, value, valueColor = "#333" }) => (
  <div
    style={{
      padding: "15px 20px",
      backgroundColor: "white",
      borderRadius: "8px",
      border: "1px solid #e0e0e0",
    }}
  >
    <div style={{ fontSize: "12px", color: "#888", marginBottom: "8px" }}>
      {label}
    </div>
    <div style={{ fontSize: "18px", fontWeight: "bold", color: valueColor }}>
      {value}
    </div>
  </div>
);

export default CameraDetail;
