"use client";

import { useEffect, useState } from "react";

export default function Home() {
  
    const colleges = [
  {
    name: "IIT Delhi",
    location: "New Delhi",
    rating: 4.9,
    fees: "₹2.5 Lakhs/year",
    package: "₹22 LPA",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200",
  },

  {
    name: "BITS Pilani",
    location: "Rajasthan",
    rating: 4.8,
    fees: "₹5 Lakhs/year",
    package: "₹18 LPA",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200",
  },

  {
    name: "VIT Vellore",
    location: "Tamil Nadu",
    rating: 4.7,
    fees: "₹3 Lakhs/year",
    package: "₹12 LPA",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200",
  },

  {
    name: "AIIMS Delhi",
    location: "Delhi",
    rating: 4.9,
    fees: "₹10,000/year",
    package: "₹35 Lakhs",
    category: "Medical",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200",
  },

  {
    name: "CMC Vellore",
    location: "Tamil Nadu",
    rating: 4.8,
    fees: "₹50,000/year",
    package: "₹25 Lakhs",
    category: "Medical",
    image:
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1200",
  },

  {
    name: "IIM Ahmedabad",
    location: "Gujarat",
    rating: 4.9,
    fees: "₹25 Lakhs",
    package: "₹35 LPA",
    category: "MBA",
    image:
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200",
  },

  {
    name: "IIM Bangalore",
    location: "Bangalore",
    rating: 4.8,
    fees: "₹24 Lakhs",
    package: "₹33 LPA",
    category: "MBA",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200",
  },

  {
    name: "NLU Delhi",
    location: "Delhi",
    rating: 4.7,
    fees: "₹2 Lakhs/year",
    package: "₹16 LPA",
    category: "Law",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200",
  },

  {
    name: "NLSIU Bangalore",
    location: "Bangalore",
    rating: 4.8,
    fees: "₹3 Lakhs/year",
    package: "₹18 LPA",
    category: "Law",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200",
  },
];

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
  const savedFavorites = localStorage.getItem("favorites");

  if (savedFavorites) {
    setFavorites(JSON.parse(savedFavorites));
  }
}, []);
useEffect(() => {
  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
}, [favorites]);
  const [compareColleges, setCompareColleges] = useState<string[]>([]);
  useEffect(() => {
  const savedCompare = localStorage.getItem("compareColleges");

  if (savedCompare) {
    setCompareColleges(JSON.parse(savedCompare));
  }
}, []);
useEffect(() => {
  localStorage.setItem(
    "compareColleges",
    JSON.stringify(compareColleges)
  );
}, [compareColleges]);
  const [sortBy, setSortBy] = useState("Default");

 const filteredColleges = colleges.filter((college) => {
  const matchesSearch =
    college.name.toLowerCase().includes(search.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" ||
    college.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

const sortedColleges = [...filteredColleges].sort((a, b) => {
  if (sortBy === "Highest Rating") {
    return b.rating - a.rating;
  }

  if (sortBy === "Lowest Rating") {
    return a.rating - b.rating;
  }

  return 0;
});
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="flex items-center justify-between border-b bg-white px-8 py-5 shadow-sm">
        <div>
  <h1 className="text-5xl font-extrabold text-blue-600">
    CollegeFinder
  </h1>

 <div className="mt-2 flex gap-4 text-sm font-bold text-gray-900">
    <span>❤️ Favorites: {favorites.length}</span>
    <span>⚖️ Compare: {compareColleges.length}</span>
  </div>
</div>

        <button className="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700">
          Login
        </button>
      </nav>
     {compareColleges.length > 0 && (
  <div className="mx-auto mt-6 max-w-5xl rounded-2xl bg-green-50 p-6 shadow-md">
    <h2 className="mb-4 text-center text-2xl font-bold text-green-700">
      ⚖️ Compare Colleges
    </h2>

    <table className="w-full bg-white rounded-xl overflow-hidden">
      <thead>
        <tr className="bg-green-600 text-white">
          <th className="p-3">College</th>
          <th className="p-3">Rating</th>
          <th className="p-3">Fees</th>
          <th className="p-3">Package</th>
        </tr>
      </thead>

      <tbody>
        {colleges
          .filter((college) =>
            compareColleges.includes(college.name)
          )
          .map((college) => (
            <tr
  key={college.name}
  className="border-b text-center text-gray-900 font-semibold"
>
              <td className="p-3">{college.name}</td>
              <td className="p-3">⭐ {college.rating}</td>
              <td className="p-3">{college.fees}</td>
              <td className="p-3">{college.package}</td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
)}

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-6xl font-extrabold leading-tight text-gray-900">
          Discover Your Dream College
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-2xl leading-relaxed text-gray-600">
          Search, compare, and save colleges with a modern platform designed for students.
        </p>

        {/* Search Box */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-4 rounded-3xl bg-white p-6 shadow-2xl md:flex-row">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search colleges by name or location..."
            className="flex-1 rounded-2xl border border-gray-300 px-6 py-5 text-lg text-gray-900 placeholder:text-gray-500 outline-none focus:border-blue-500"
          />

          <button className="rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 px-10 py-5 text-xl font-bold text-white transition hover:scale-105">
            Search
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-3">

        <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
          <h3 className="text-5xl font-extrabold text-blue-600">
            500+
          </h3>

          <p className="mt-4 text-xl text-gray-600">
            Colleges Listed
          </p>
        </div>

        <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
          <h3 className="text-5xl font-extrabold text-blue-600">
            10k+
          </h3>

          <p className="mt-4 text-xl text-gray-600">
            Student Searches
          </p>
        </div>

        <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
          <h3 className="text-5xl font-extrabold text-blue-600">
            95%
          </h3>

          <p className="mt-4 text-xl text-gray-600">
            Satisfaction Rate
          </p>
        </div>

      </section>

      {/* Top Colleges Section */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="mb-14 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Top Colleges
          </h2>
          <p className="mt-3 text-lg font-semibold text-blue-600">
          {filteredColleges.length} colleges found
        </p>

          <p className="mt-4 text-xl text-gray-600">
            Explore the best colleges in India.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            
  {["All", "Engineering", "Medical", "MBA", "Law"].map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`rounded-full px-6 py-3 font-semibold transition ${
        selectedCategory === category
          ? "bg-blue-600 text-white"
          : "bg-white text-gray-700 shadow-md"
      }`}
    >
      {category}
    </button>
  ))}
</div>
</div>
    <div className="mt-6 mb-10 flex justify-center">
  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="rounded-xl border-2 border-blue-500 bg-white px-4 py-3 text-lg font-semibold text-blue-700 shadow-md"
  >
    <option>Default</option>
    <option>Highest Rating</option>
    <option>Lowest Rating</option>
  </select>
</div>
  
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredColleges.length === 0 && (
  <div className="col-span-3 text-center py-10">
    <h3 className="text-4xl font-bold text-red-600">
      ❌ No Colleges Found
    </h3>

    <p className="mt-3 text-lg text-gray-600">
      Try a different search term or category.
    </p>
  </div>
)}

 
    {sortedColleges.map((college, index) => (
  <div
    key={index}
    className="overflow-hidden rounded-3xl bg-white shadow-2xl transition hover:-translate-y-3 hover:shadow-blue-200"
  >
    <img
      src={college.image}
      alt={college.name}
      className="h-56 w-full object-cover"
    />

    <div className="p-7">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-extrabold text-gray-900">
          {college.name}
        </h3>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
          ⭐ {college.rating}
        </span>
      </div>

      <p className="mt-3 text-lg text-gray-600">
        {college.location}
      </p>

      <div className="mt-6 space-y-3 text-gray-700">
        <p>💰 Fees: {college.fees}</p>
        <p>📈 Avg Package: {college.package}</p>
        <p>🏆 {college.category}</p>
      </div>
        <div className="mt-6 flex gap-3">
  <button
   onClick={() => {
  if (favorites.includes(college.name)) {
    setFavorites(
      favorites.filter((name) => name !== college.name)
    );
  } else {
    setFavorites([...favorites, college.name]);
  }
}}
   className={`flex-1 rounded-xl py-3 text-white font-semibold ${
  favorites.includes(college.name)
    ? "bg-gray-500"
    : "bg-red-500"
}`}
>
{favorites.includes(college.name) ? "❤️ Saved" : "❤️ Save"}
  </button>
  <button
  onClick={() => {
  if (compareColleges.includes(college.name)) {
    setCompareColleges(
      compareColleges.filter(
        (name) => name !== college.name
      )
    );
  } else {
    setCompareColleges([
      ...compareColleges,
      college.name,
    ]);
  }
}}
  className={`flex-1 rounded-xl py-3 text-white font-semibold ${
  compareColleges.includes(college.name)
    ? "bg-gray-500"
    : "bg-green-600"
}`}
>
{compareColleges.includes(college.name)
  ? "⚖️ Added"
  : "⚖️ Compare"}
</button>

   
</div>
      <a
  href={`/college/${college.name
    .toLowerCase()
    .replace(/\s+/g, "-")}`}
  className="mt-7 block w-full rounded-2xl bg-blue-600 py-4 text-center text-lg font-bold text-white transition hover:bg-blue-700"
>
  View Details
</a>
    </div>
  </div>
))
  }

         

        </div>
      </section>
      <footer className="bg-gray-900 text-white text-center p-4 mt-10">
  © 2026 College Selection Platform
</footer>

    </main>
  );
}