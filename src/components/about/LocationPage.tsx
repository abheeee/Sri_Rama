import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const LocationPage: React.FC = () => {
  return (
    <div className="w-full">

      {/* 🔥 HERO SECTION */}
      <div className="relative h-[350px] w-full">

        {/* Background Image */}
        <img
          src="/college.jpg" // 👉 put your image in public folder
          alt="Sri Rama College"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-2">
            Our Location
          </h1>
          <p className="text-lg max-w-2xl">
            Discover the serene and inspiring campus of Sri Rama College, Kalladka
          </p>
        </div>
      </div>

      {/* 🔥 CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-black">About Our Campus</h2>
          <p className="text-gray-600 leading-relaxed">
            Sri Rama College, located in Kalladka, Bantwal Taluk of Dakshina Kannada district,
            offers a peaceful and academically enriching environment. Surrounded by natural beauty,
            the campus provides modern infrastructure, well-equipped classrooms, libraries, and
            facilities that support holistic student development.
          </p>
        </div>

        {/* Contact + Map (Card) */}
        <Card className="bg-white">
          <CardContent>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">

              {/* Contact Info (Left) */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-black">Contact Information</h2>

                <div className="text-gray-700 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-gray-600 mt-1" />
                    <p>
                      <strong>Address:</strong> Sri Rama College, Kalladka, Bantwal Taluk, Dakshina Kannada, Karnataka, India
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-gray-600 mt-1" />
                    <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-gray-600 mt-1" />
                    <p><strong>Email:</strong> info@sriramacollege.edu</p>
                  </div>
                </div>
              </div>

              {/* Map (Right) */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-black">Find Us on Map</h2>

                <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps?q=Sri+Rama+College+Kalladka&output=embed"
                    width="100%"
                    height="100%"
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