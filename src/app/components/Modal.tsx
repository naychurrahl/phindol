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
  const person = hayStack.find((d) => d.id === modeKey);

  if (!person) toggleMode(null);

  console.log(person);

  return (
    <div
      onClick={() => {
        console.log(modeKey);
        toggleMode(null);
      }}
      >
      {person.bio}
    </div>
  );
}
