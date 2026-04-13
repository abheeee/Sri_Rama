import { motion } from "framer-motion";
import { Users, BookOpen, Award, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-800">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Our College
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-orange-100">
            Empowering students with knowledge, innovation, and values to shape
            a better future.
          </p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="/college.jpg"
          alt="College"
          className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-orange-600">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our institution is committed to academic excellence and holistic
            development. We provide a dynamic learning environment that fosters
            creativity, leadership, and innovation among students.
          </p>
          <p className="text-gray-600 leading-relaxed">
            With experienced faculty and modern infrastructure, we ensure that
            students are prepared for real-world challenges and global
            opportunities.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Users, title: "5000+", desc: "Students" },
            { icon: BookOpen, title: "50+", desc: "Courses" },
            { icon: Award, title: "100+", desc: "Awards" },
            { icon: Target, title: "95%", desc: "Placement" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/40"
            >
              <item.icon className="mx-auto mb-4 text-orange-500" size={40} />
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10">
        <Card className="rounded-3xl backdrop-blur-lg bg-white/60 border border-white/40 shadow-xl hover:shadow-2xl transition duration-500">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-orange-600">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver quality education that nurtures critical thinking,
              innovation, and ethical values, preparing students for
              professional excellence.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl backdrop-blur-lg bg-white/60 border border-white/40 shadow-xl hover:shadow-2xl transition duration-500">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-orange-600">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To be a leading institution recognized for academic excellence,
              research, and societal contribution.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="mb-6 text-orange-100">
            Be part of a journey that transforms knowledge into success.
          </p>
          <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Explore Courses
          </button>
        </motion.div>
      </section>

    </div>
  );
}