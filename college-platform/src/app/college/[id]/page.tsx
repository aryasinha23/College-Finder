export default async function CollegeDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const colleges: Record<
    string,
    {
      name: string;
      location: string;
      fees: string;
      package: string;
      rating: number;
      courses: string;
      image: string;
    }
  > = {
    "iit-delhi": {
      name: "IIT Delhi",
      location: "New Delhi",
      fees: "₹2.5 Lakhs/year",
      package: "₹22 LPA",
      rating: 4.9,
      courses: "B.Tech, M.Tech, PhD",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200",
    },

    "bits-pilani": {
      name: "BITS Pilani",
      location: "Rajasthan",
      fees: "₹5 Lakhs/year",
      package: "₹18 LPA",
      rating: 4.8,
      courses: "B.Tech, M.Tech, PhD",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200",
    },

    "vit-vellore": {
      name: "VIT Vellore",
      location: "Tamil Nadu",
      fees: "₹3 Lakhs/year",
      package: "₹12 LPA",
      rating: 4.7,
      courses: "B.Tech, M.Tech, PhD",
      image:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200",
    },

    "aiims-delhi": {
      name: "AIIMS Delhi",
      location: "Delhi",
      fees: "₹10,000/year",
      package: "₹35 Lakhs",
      rating: 4.9,
      courses: "MBBS, MD, MS",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200",
    },

    "cmc-vellore": {
      name: "CMC Vellore",
      location: "Tamil Nadu",
      fees: "₹50,000/year",
      package: "₹25 Lakhs",
      rating: 4.8,
      courses: "MBBS, Nursing, MS",
      image:
        "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1200",
    },

    "iim-ahmedabad": {
      name: "IIM Ahmedabad",
      location: "Gujarat",
      fees: "₹25 Lakhs",
      package: "₹35 LPA",
      rating: 4.9,
      courses: "MBA, PGP, Executive MBA", 
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200",
    },

    "iim-bangalore": {
      name: "IIM Bangalore",
      location: "Bangalore",
      fees: "₹24 Lakhs",
      package: "₹33 LPA",
      rating: 4.8,
      courses: "MBA, PGP, Executive MBA",
      image:
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200",
    },

    "nlu-delhi": {
      name: "NLU Delhi",
      location: "Delhi",
      fees: "₹2 Lakhs/year",
      package: "₹16 LPA",
      rating: 4.7,
      courses: "BA LLB, LLM, PhD",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200",
    },

    "nlsiu-bangalore": {
      name: "NLSIU Bangalore",
      location: "Bangalore",
      fees: "₹3 Lakhs/year",
      package: "₹18 LPA",
      rating: 4.8,
      courses: "BA LLB, LLM, PhD",
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200",
    },
  };

  const college = colleges[id];

  if (!college) {
    return (
      
  <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100 p-6">
    <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md">
      <h1 className="text-5xl mb-4">❌</h1>

      <h2 className="text-3xl font-bold text-red-600 mb-4">
        College Not Found
      </h2>

      <p className="text-gray-700 mb-6">
        The college you are looking for does not exist in our database.
      </p>

      <a
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
      >
        Go Back Home
      </a>
    </div>
  </main>
);
    
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* College Image */}
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-[420px] object-cover"
        />

        <div className="p-10">

          {/* Heading */}
          <h1 className="text-5xl font-extrabold text-blue-700">
            {college.name}
          </h1>

          <p className="mt-3 text-xl text-gray-600">
            Explore complete information about this institution.
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-blue-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-bold text-blue-700">
                📍 Location
              </h3>
              <p className="mt-2 text-xl font-bold text-gray-900">
                {college.location}
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-bold text-green-700">
                🎓 Courses
              </h3>
              <p className="mt-2 text-xl font-bold text-gray-900">
                {college.courses}
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-bold text-yellow-700">
                💰 Fees
              </h3>
              <p className="mt-2 text-xl font-bold text-gray-900">
                {college.fees}
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl shadow">
              <h3 className="text-lg font-bold text-purple-700">
                💼 Average Package
              </h3>
              <p className="mt-2 text-xl font-bold text-gray-900">
                {college.package}
              </p>
            </div>

            <div className="bg-pink-50 p-6 rounded-2xl shadow md:col-span-2">
              <h3 className="text-lg font-bold text-pink-700">
                ⭐ Rating
              </h3>
              <p className="mt-2 text-2xl font-bold text-yellow-600">
                {college.rating}/5
              </p>
            </div>

          </div>

          {/* Apply Button */}
          <a
          href="/apply"
          className="block mt-10 w-full rounded-2xl bg-blue-600 py-4 text-white text-xl font-bold text-center hover:bg-blue-700 transition"
              >
               Apply Now
              </a>

        </div>
      </div>
    </main>
  );
}