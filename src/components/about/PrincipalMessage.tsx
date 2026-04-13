import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function PrincipalMessage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-800">

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Principal's Message
          </h1>
          <p className="text-orange-100 max-w-xl mx-auto">
            A message of vision, leadership, and commitment to excellence.
          </p>
        </motion.div>
      </section>

      {/* Main Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="https://source.unsplash.com/400x400/?principal,portrait"
          alt="Principal"
          className="rounded-3xl shadow-2xl object-cover w-full max-w-md mx-auto hover:scale-105 transition duration-500"
        />

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-3xl backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl">
            <CardContent className="p-8">

              <h2 className="text-3xl font-bold text-orange-600 mb-2">
                Dr. Suresh Kumar
              </h2>

              <p className="text-sm text-gray-500 mb-4">
                Principal
              </p>

              {/* Quote */}
              <p className="italic text-orange-500 mb-4 border-l-4 border-orange-400 pl-4">
                "Education is not just about knowledge, it is about building
                character, confidence, and a vision for the future."
              </p>

              {/* Message */}
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to our institution. We are committed to nurturing young
                minds with quality education and strong values. Our goal is to
                empower students with the skills and knowledge needed to excel
                in a rapidly changing world.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                With dedicated faculty, modern infrastructure, and a focus on
                innovation, we strive to create an environment that fosters
                growth, leadership, and excellence.
              </p>

              <p className="text-gray-600 leading-relaxed">
                I invite you to be part of this journey towards knowledge and
                success.
              </p>

            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Bottom Highlight */}
      <section className="py-16 px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Inspiring Future Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission is to guide students towards academic excellence while
            shaping them into responsible citizens ready to contribute to
            society.
          </p>
        </motion.div>
      </section>

    </div>
  );
}