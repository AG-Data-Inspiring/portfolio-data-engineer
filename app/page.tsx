import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-50">
          Welcome to Angela's Data Journey!
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          A small place to explore projects, notes, and data stories.
        </p>
      </main>
    </div>
  );
}
