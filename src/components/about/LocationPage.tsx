import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LocationPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* 🔥 HERO SECTION */}
      <div className="relative h-[280px] w-full">
        <img
          src="/college.jpg"
          alt="Sri Rama College"
          className="w-full h-full object-cover"
        />

        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/60"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="inline-block text-center rounded-xl bg-white/40 backdrop-blur-md p-6 shadow-lg ring-1 ring-black/10">
            <h1 className="text-3xl sm:text-4xl font-bold text-black/80">Our Location</h1>
            <p className="text-gray-800/80 mt-2">Sri Rama College, Kalladka</p>
          </div>
        </div>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* DESCRIPTION */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-black">
            About Our Campus
          </h2>
          <p className="text-gray-600">
            Sri Rama College is located in Kalladka, Bantwal Taluk of Dakshina Kannada district.
            The campus provides a peaceful and academic-friendly environment with modern facilities
            and a strong focus on student development.
          </p>
        </div>

        {/* 🔥 MAP + CONTACT */}
        <Card className="bg-white">
          <CardContent>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">

              {/* CONTACT */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-black">Contact Us</h3>

                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="text-primary mt-1 h-5 w-5" />
                  <p>
                    Sri Rama College, Kalladka<br />
                    Bantwal Taluk, Dakshina Kannada<br />
                    Karnataka, India
                  </p>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="text-primary h-5 w-5" />
                  <a className="hover:underline" href="tel:+919876543210">+91 9876543210</a>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="text-primary h-5 w-5" />
                  <a className="hover:underline" href="mailto:info@sriramacollege.edu">
                    info@sriramacollege.edu
                  </a>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="text-primary h-5 w-5" />
                  <p>Mon - Sat: 9:00 AM – 5:00 PM</p>
                </div>
              </div>

              {/* MAP */}
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Find Us on Map</h3>
                <div className="rounded-xl overflow-hidden shadow border">
                  <iframe
                    src="https://www.google.com/maps?q=Sri+Rama+College+Kalladka&output=embed"
                    width="100%"
                    height="320"
                    loading="lazy"
                    className="border-0"
                  ></iframe>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default LocationPage;