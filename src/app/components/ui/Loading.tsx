export function Loading() {
  return (
    <div className="flex items-center justify-center py-32">
      <div
        className="w-10 h-10 rounded-full animate-spin"
        style={{
          border: "3px solid var(--brand-gray-200)",
          borderTopColor: "var(--brand-secondary)",
        }}
      />
    </div>
  );
}
