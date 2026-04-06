import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, BookOpen, Users, Building, Laptop, 
  Trophy, Wifi, Coffee, ChevronRight, Play 
} from 'lucide-react';

const AboutCampus: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  const features = [
    { icon: BookOpen, text: 'State-of-the-art infrastructure' },
    { icon: Users, text: 'Experienced faculty members' },
    { icon: Laptop, text: 'Modern laboratories' },
    { icon: Building, text: 'Digital library' },
    { icon: Trophy, text: 'Sports facilities' },
    { icon: Wifi, text: 'Wi-Fi Campus' },
    { icon: Coffee, text: 'Cafeteria' },
    { icon: Building, text: 'Hostel accommodation' },
  ];

  const stats = [
    { value: '50+', label: 'Acres Campus' },
    { value: '200+', label: 'Faculty' },
    { value: '25+', label: 'Courses' },
    { value: '5000+', label: 'Alumni' },
  ];

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Side */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">

              {showVideo ? (
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Campus Tour"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
                    alt="Campus"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />

                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 md:h-10 md:w-10 text-primary ml-1" />
                    </div>
                  </button>
                </>
              )}
            </div>

            {/* Floating Card FIXED */}
            <div className="absolute -bottom-6 right-2 md:-bottom-8 md:-right-8">
              <Card className="bg-primary text-white shadow-xl">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-xl md:text-3xl font-bold">25+</div>
                  <div className="text-xs md:text-sm">Years of Excellence</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <Badge variant="secondary" className="mb-4">About Campus</Badge>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Where Excellence Meets Opportunity
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Sri Rama Degree College is committed to providing quality education
              with a focus on holistic development. Our campus spans over 50 acres
              with modern facilities and a conducive learning environment that
              nurtures talent and encourages innovation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <Button className="group w-full sm:w-auto">
              Read More
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCampus;