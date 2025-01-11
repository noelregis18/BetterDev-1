export default function CodePreview() {
  return (
      <div 
        className="
          relative bg-gray-900 border-2 border-[#7C3AED]/20 rounded-lg p-6 font-mono text-sm text-gray-300
          sm:relative sm:bg-gray-900 sm:border-2 sm:border-[#7C3AED]/20 sm:rounded-lg sm:p-6 sm:font-mono sm:text-sm sm:text-gray-300
          md:relative md:bg-gray-900 md:border-2 md:border-[#7C3AED]/20 md:rounded-lg md:p-6 md:font-mono md:text-sm md:text-gray-300">
        <div 
          className="
            absolute right-4 top-0 -translate-y-1/2  
            sm:absolute sm:right-4 sm:top-0 sm:-translate-y-1/2
            md:absolute md:right-4 md:top-0 md:-translate-y-1/2">
          <span 
            className="
              px-4 py-1 text-sm text-white bg-[#7C3AED] rounded-full  
              sm:px-4 sm:py-1 sm:text-sm sm:text-white sm:bg-[#7C3AED] sm:rounded-full
              md:px-4 md:py-1 md:text-sm md:text-white md:bg-[#7C3AED] md:rounded-full">
            AI Suggestion
          </span>
        </div>
        <pre className="text-xs sm:text-base text-gray-300">
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
