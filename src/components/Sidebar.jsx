import { useState } from "react";
import { scData } from "../data/sc";

export default function Sidebar({ onSelect, selected }) {
  const [open, setOpen] = useState({});

  const toggle = (key) => {
    setOpen({
      ...open,
      [key]: !open[key],
    });
  };

  const renderItems = (items, level = 0) => {
    return items.map((item, index) => {
      const key = item.title + index;

      if (item.children) {
        return (
          <div key={key}>
            <div
              onClick={() => toggle(key)}
              style={{
                cursor: "pointer",
                padding: "6px 8px",
                paddingLeft: level * 16 + "px",
                fontWeight: "bold",
                color: "#e2e8f0",
              }}
            >
              {open[key] ? "▼ " : "▶ "} {item.title}
            </div>

            {open[key] && (
              <div>{renderItems(item.children, level + 1)}</div>
            )}
          </div>
        );
      }

      return (
        <div
          key={key}
          onClick={() => onSelect(item)}   // ★重要：item丸ごと渡す
          style={{
            cursor: "pointer",
            padding: "6px 8px",
            paddingLeft: level * 16 + "px",
            borderRadius: "6px",
            backgroundColor:
              selected?.title === item.title ? "#334155" : "transparent",
            color:
              selected?.title === item.title ? "#fff" : "#cbd5f5",
          }}
        >
          {item.title}
        </div>
      );
    });
  };

  return (
    <div style={{ color: "white", fontSize: "14px" }}>
      {renderItems(scData)}
    </div>
  );
}
