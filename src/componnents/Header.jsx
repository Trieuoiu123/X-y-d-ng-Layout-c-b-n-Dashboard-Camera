function Header({ activePage }) {
  return (
    <header
      style={{
        height: "70px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
        borderBottom: "1px solid #e0e0e0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
      }}
    >
      {/* Bên trái: Tên trang & Breadcrumb */}
      <div>
        <h2 style={{ margin: 0, fontSize: "18px", color: "#1a1a1a" }}>
          {activePage}
        </h2>
        <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>
          Hệ thống / <span style={{ color: "#1a73e8" }}>{activePage}</span>
        </div>
      </div>

      {/* Bên phải: Badge & Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Badge trạng thái */}
        <div
          style={{
            backgroundColor: "#e8f0fe",
            color: "#1a73e8",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#34a853",
              borderRadius: "50%",
            }}
          ></span>
          12 camera online
        </div>

        {/* User Avatar */}
        <div
          style={{
            width: "36px",
            height: "36px",
            backgroundColor: "#1a73e8",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            border: "2px solid #e8f0fe",
          }}
        >
          AD
        </div>
      </div>
    </header>
  );
}

export default Header;
