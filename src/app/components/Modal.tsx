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

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
      className="fixed inset-0 h-dvh w-screen z-50 backdrop-blur-sm flex items-center overflow-scroll justify-center p-4"
    >
      <div className="flex flex-col bg-brand-primary p-4 overflow-scroll space-y-6">
        <div className="text-center mb-6">
          <img
            src={person.image ?? "img.jpg"}
            alt={person.name}
            className="w-full object-cover"
          />

          <h2 className="font-heading text-2xl font-bold ">{person.name}</h2>

          <p className="text-brand-neutral font-semibold">{person.position}</p>
        </div>

        <div className="space-y-6">
          {Object.entries(person.meta ?? null).map(([key, value]) => (
            <div key={key}>
              <h3 className="font-semibold text-brand-blue-200 mb-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-brand-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
                {key}
              </h3>

              <p className="text-brand-blue-100"> {value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
