export default function CodePreview() {
  return (
      <div className="relative bg-gray-900 border-2 border-[#7C3AED]/20 rounded-lg p-6 font-mono text-sm text-gray-300">
        <div className="absolute right-4 top-0 -translate-y-1/2">
          <span className="px-4 py-1 text-sm text-white bg-[#7C3AED] rounded-full">
            AI Suggestion
          </span>
        </div>
        <pre className="text-gray-300">
          <code>{`// BetterDev suggests:
  function optimizePerformance(data) {
    // ✨ Use map instead of forEach
    return data.map(item => {
      return processItem(item);
    });
  }`}</code>
        </pre>
      </div>
  );
}
