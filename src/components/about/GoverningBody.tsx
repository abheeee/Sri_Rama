import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const members = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Chairman",
    image: "https://source.unsplash.com/200x200/?man,portrait",
    message:
      "Providing visionary leadership and strategic direction for the institution.",
  },
  {
    name: "Mrs. Anitha Shetty",
    role: "Secretary",
    image: "https://source.unsplash.com/200x200/?woman,portrait",
    message:
      "Ensuring smooth administration and implementation of policies.",
  },
  {
    name: "Dr. Naveen Rao",
    role: "Treasurer",
    image: "https://source.unsplash.com/200x200/?professional,man",
    message:
      "Managing financial planning and institutional growth initiatives.",
  },
  {
    name: "Prof. Meena Nair",
    role: "Academic Advisor",
    image: "https://source.unsplash.com/200x200/?teacher,woman",
    message:
      "Guiding academic excellence and curriculum development.",
  },
];

export default function GoverningBodyPage() {
  return (
    <div className="min-h-screen px-6 md:px-16 py-12 bg-gradient-to-br from-orange-50 via-white to-orange-100">

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Governing Body
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Meet the leadership team guiding our institution towards excellence,
          innovation, and growth.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <Card className="rounded-3xl overflow-hidden group backdrop-blur-lg bg-white/60 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500">
              
              {/* Gradient Top */}
              <div className="h-28 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 top-12 object-cover shadow-md"
                />
              </div>

              <CardContent className="pt-16 pb-6 text-center px-4">
                
                {/* Name */}
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition">
                  {member.name}
                </h2>

                {/* Role */}
                <p className="text-sm font-medium text-orange-500">
                  {member.role}
                </p>

                {/* Divider */}
                <div className="w-10 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto my-3 rounded-full"></div>

                {/* Message */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.message}
                </p>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-20 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Our Vision & Leadership
        </h2>
        <p className="text-gray-600">
          Our governing body ensures continuous innovation, strong academic
          foundations, and a future-ready environment for students to thrive.
        </p>
      </motion.div>

    </div>
  );
}