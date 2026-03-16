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
  
  const closeModal = () => {
    toggleMode(null);
    document.body.classList.remove("overflow-hidden");
  };

  const person = hayStack.find((d) => d.id === modeKey);

  if (!person) closeModal;

  console.log({here: person});

  return (
    <div
      onClick={() => {
        closeModal();
      }}
      className="fixed inset-0 h-dvh w-screen z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      {person.bio}
    </div>
  );
}
