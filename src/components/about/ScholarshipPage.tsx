import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const scholarships = [
  {
    title: "Merit-Based Scholarship",
    amount: "Up to 100% Fee Waiver",
    desc: "Awarded to students with outstanding academic performance.",
  },
  {
    title: "Need-Based Scholarship",
    amount: "Up to 75% Fee Waiver",
    desc: "Provided to students from financially weaker backgrounds.",
  },
  {
    title: "Sports Scholarship",
    amount: "Up to 50% Fee Waiver",
    desc: "For students excelling in sports at state or national levels.",
  },
  {
    title: "Minority Scholarship",
    amount: "Government Sponsored",
    desc: "Scholarships for minority students as per government norms.",
  },
];

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-800">

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Scholarships
          </h1>
          <p className="text-orange-100 max-w-xl mx-auto">
            Supporting talented and deserving students to achieve their dreams.
          </p>
        </motion.div>
      </section>

      {/* Scholarships */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Available Scholarships
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {scholarships.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="rounded-3xl backdrop-blur-lg bg-white/70 border border-white/40 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <CardContent className="p-6 text-center">

                  <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-gray-800 mb-3">
                    {item.amount}
                  </p>

                  <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-3 rounded-full"></div>

                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10">
        
        <Card className="rounded-3xl backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              Eligibility Criteria
            </h3>
            <ul className="text-gray-600 space-y-2 list-disc pl-5">
              <li>Minimum academic performance as required</li>
              <li>Valid supporting documents</li>
              <li>Attendance and discipline record</li>
              <li>Special criteria for sports or minority categories</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-3xl backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              Benefits
            </h3>
            <ul className="text-gray-600 space-y-2 list-disc pl-5">
              <li>Reduced financial burden</li>
              <li>Encouragement for academic excellence</li>
              <li>Recognition of talent and achievement</li>
              <li>Support for holistic development</li>
            </ul>
          </CardContent>
        </Card>

      </section>

      {/* Application Steps */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-8">
          How to Apply
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Fill out the application form",
            "Submit required documents",
            "Verification process",
            "Approval & scholarship grant",
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-md"
            >
              <div className="text-2xl font-bold text-orange-600 mb-2">
                {i + 1}
              </div>
              <p className="text-gray-600 text-sm">{step}</p>
            </motion.div>
          ))}
        </div>

        <Button
          asChild
          className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
        >
          <Link to="/about/scholarship/apply">Apply Now</Link>
        </Button>
      </section>

    </div>
  );
}