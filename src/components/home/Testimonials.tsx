import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer at Google',
      content: 'The faculty and infrastructure at Sri Rama College are outstanding. The placement support helped me achieve my dream job.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'Rahul Sharma',
      role: 'Business Analyst at Amazon',
      content: 'Excellent learning environment with great opportunities. The college prepared me well for the corporate world.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
      name: 'Priya Patel',
      role: 'Data Scientist at Microsoft',
      content: 'The practical approach to teaching and industry exposure made all the difference.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50 overflow-hidden">

      {/* FIXED CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="secondary" className="mb-4">Student Stories</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Hear from our alumni about their journey and success stories
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="hover:shadow-xl transition">
              <CardContent className="pt-8 pb-6">
                <Quote className="h-6 w-6 text-primary/20 mb-3" />
                <p className="text-gray-700 mb-5 italic text-sm">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-primary">
                    <AvatarImage src={t.image} />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>

                    <div className="flex gap-1 mt-1">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-2">
                  <Card>
                    <CardContent className="pt-6 pb-5">
                      <Quote className="h-6 w-6 text-primary/20 mb-3" />
                      <p className="text-gray-700 text-sm mb-4">
                        "{t.content}"
                      </p>

                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 border-2 border-primary">
                          <AvatarImage src={t.image} />
                          <AvatarFallback>{t.name[0]}</AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="font-semibold text-sm">{t.name}</p>
                          <p className="text-xs text-gray-500">{t.role}</p>

                          <div className="flex gap-1 mt-1">
                            {[...Array(t.rating)].map((_, j) => (
                              <Star key={j} className="h-2 w-2 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons FIXED */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white shadow"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white shadow"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === i ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;