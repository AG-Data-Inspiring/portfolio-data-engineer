import Image from "next/image";

import Link from 'next/link';
import AnimatedCounter from "./components/AnimatedCounter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:px-12 py-24">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl sm:text-7xl font-bold leading-tight mb-6">
            Welcome to Angela's Data Journey
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8">
            Exploring data, building insights, and crafting solutions through analytics and engineering.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/projects" className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              View Projects
            </Link>
            <Link href="/story" className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Read Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6 sm:px-12 py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">
              <AnimatedCounter end={10} suffix="+" />
            </h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </h3>
            <p className="text-gray-400">Data Solutions</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">
              <AnimatedCounter end={5} suffix="+" />
            </h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}
