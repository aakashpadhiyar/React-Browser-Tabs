import { useState } from "react";

export default function Tab({ children }) {
  const [highlight, setHighlight] = useState({ left: 0, opacity: 0 });

  function moveHighlight(e) {
    setHighlight({
      left: e.nativeEvent.layerX - 150
    });
  }

  function hideHighlight(e) {
    setHighlight({
      opacity: 0,
      left: e.nativeEvent.layerX - 150
    });
  }

  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
      <div className="highlight" style={highlight} />
      {children}
    </div>
  );
}
