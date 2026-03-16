import React from "react";

export default function Modal({
  modeKey,
  toggleMode,
  hayStack,
}: {
  modeKey: number | null;
  toggleMode: (v: number | null) => void;
  hayStack: any[];
}) {
  console.log(hayStack)
  return (
    <div
      onClick={() => {
        console.log(modeKey);
        toggleMode(null);
      }}
      >
      Yeah!!!
    </div>
  );
}
