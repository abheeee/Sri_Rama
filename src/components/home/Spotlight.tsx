import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const Spotlight: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      title: 'Annual Tech Fest 2024',
      date: 'March 15-17, 2024',
      venue: 'Main Auditorium',
      participants: '500+',
      time: '10:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      description: 'Join us for the biggest technical festival of the year with workshops, hackathons, and competitions.',
    },
    {
      title: 'National Level Seminar',
      date: 'March 25, 2024',
      venue: 'Conference Hall',
      participants: '200+',
      time: '9:30 AM - 5:00 PM',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      description: 'Expert talks on emerging technologies and career opportunities in the digital age.',
    },
    {
      title: 'Sports Meet 2024',
      date: 'April 5-7, 2024',
      venue: 'Sports Complex',
      participants: '1000+',
      time: '8:00 AM - 6:00 PM',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      description: 'Annual sports competition with various indoor and outdoor games.',
    },
  ];

  const nextEvent = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* FIXED CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="secondary" className="mb-4">Upcoming Events</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Spotlight Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Don't miss out on these exciting events happening on campus
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-3 right-3 bg-red-500">Featured</Badge>
              </div>

              <CardContent className="p-5">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">
                  {event.title}
                </h3>

                <div className="space-y-1 mb-3 text-gray-600">
                  <div className="flex items-center gap-2 text-xs">
                    <Calendar className="h-3 w-3" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Clock className="h-3 w-3" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <MapPin className="h-3 w-3" />
                    {event.venue}
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Users className="h-3 w-3" />
                    {event.participants}
                  </div>
                </div>

                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {event.description}
                </p>

                <Button variant="outline" className="w-full text-sm">
                  Register Now
                </Button>
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
              {events.map((event, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <Card>
                    <div className="relative h-44">
                      <img src={event.image} className="w-full h-full object-cover" />
                      <Badge className="absolute top-3 right-3 bg-red-500">Featured</Badge>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="text-base font-semibold mb-2">{event.title}</h3>

                      <div className="space-y-1 text-gray-600 mb-3">
                        <div className="flex items-center gap-2 text-xs">
                          <Calendar className="h-3 w-3" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <MapPin className="h-3 w-3" />
                          {event.venue}
                        </div>
                      </div>

                      <Button size="sm" className="w-full text-sm">
                        Register Now
                      </Button>
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
            onClick={prevEvent}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white shadow"
            onClick={nextEvent}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {events.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Spotlight;