export default function LiveToolPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 sm:px-12 py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Live Data Tool</h1>
          <p className="text-lg text-gray-400">
            Interactive tools and utilities for data exploration and analysis.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="px-6 sm:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Tool 1 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">SQL Query Analyzer</h2>
            <p className="text-gray-400 mb-6">
              Analyze and optimize your SQL queries with real-time performance metrics and suggestions.
            </p>
            <div className="border border-gray-800 rounded-lg p-8 bg-gray-950">
              <textarea
                className="w-full h-40 bg-gray-900 text-gray-300 p-4 rounded border border-gray-700 focus:border-blue-500 focus:outline-none"
                placeholder="Paste your SQL query here..."
              ></textarea>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                Analyze Query
              </button>
            </div>
          </div>

          {/* Tool 2 */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Data Format Converter</h2>
            <p className="text-gray-400 mb-6">
              Convert between JSON, CSV, and other data formats instantly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-8 bg-gray-950">
                <label className="block text-sm font-semibold mb-2">Input</label>
                <textarea
                  className="w-full h-40 bg-gray-900 text-gray-300 p-4 rounded border border-gray-700 focus:border-blue-500 focus:outline-none"
                  placeholder="Paste your data here..."
                ></textarea>
              </div>
              <div className="border border-gray-800 rounded-lg p-8 bg-gray-950">
                <label className="block text-sm font-semibold mb-2">Output</label>
                <textarea
                  className="w-full h-40 bg-gray-900 text-gray-300 p-4 rounded border border-gray-700 focus:border-blue-500 focus:outline-none"
                  placeholder="Converted output will appear here..."
                  readOnly
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
