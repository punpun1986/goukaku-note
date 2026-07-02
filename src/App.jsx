import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { scContent } from "./data/sc/index";

function App() {
  const [selected, setSelected] = useState(null);
  const [modalImg, setModalImg] = useState(null); // ← 画像用

  const content = selected && scContent[selected.title];

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* サイドバー */}
      <div
        style={{
          width: "280px",
          backgroundColor: "#020617",
          padding: "10px",
          borderRight: "1px solid #1e293b",
          height: "100vh",
          overflowY: "auto",
          flexShrink: 0,
          position: "sticky",
          top: 0,
        }}
      >
        <Sidebar onSelect={setSelected} selected={selected} />
      </div>

      {/* コンテンツ */}
      <div
        style={{
          flex: 1,
          padding: "10px 40px",
          background: "#020617",
          color: "#e2e8f0",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div style={{ maxWidth: "800px", width: "100%" }}>
          {content ? (
            <div
              style={{
                background: "#0f172a",
                padding: "16px 30px",
                borderRadius: "10px",
                border: "1px solid #1e293b",
              }}
            >
              {/* タイトル */}
              <h1
                style={{
                  marginTop: "0", // ← 上余白消し
                  fontSize: "20px",
                  marginBottom: "15px",
                  paddingBottom: "8px",
                  borderBottom: "2px solid #334155",
                  color: "#e2e8f0",
                }}
              >
                {content.title}
              </h1>

              {/* 本文 */}
              {content.body.map((item, index) => {
                if (item.type === "title") {
                  return (
                    <h2
                      key={index}
                      style={{
                        fontSize: "18px",
                        marginTop: "25px",
                        marginBottom: "10px",
                        borderLeft: "4px solid #6366f1",
                        paddingLeft: "10px",
                      }}
                    >
                      {item.value}
                    </h2>
                  );
                }

                if (item.type === "text") {
                  return (
                    <p
                      key={index}
                      style={{
                        lineHeight: "1.9",
                        marginBottom: "20px",
                        whiteSpace: "pre-line",
                        color: "#cbd5f5",
                      }}
                    >
                      {item.value}
                    </p>
                  );
                }

                if (item.type === "list") {
                  return (
                    <ul
                      key={index}
                      style={{
                        marginBottom: "20px",
                        paddingLeft: "20px",
                      }}
                    >
                      {item.items.map((li, i) => (
                        <li key={i}>{li}</li>
                      ))}
                    </ul>
                  );
                }

                if (item.type === "image") {
                  return (
                    <img
                      key={index}
                      src={item.value}
                      alt=""
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                      onClick={() => setModalImg(item.value)} // ← ここで拡大
                    />
                  );
                }

                return null;
              })}
            </div>
          ) : (
            <h1>項目を選んでね😊</h1>
          )}
        </div>
      </div>

      {/* 🔥 モーダル（ここが今回の追加部分） */}
      {modalImg && (
        <div
          onClick={() => setModalImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "zoom-out",
          }}
        >
          <img
            src={modalImg}
            alt=""
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
