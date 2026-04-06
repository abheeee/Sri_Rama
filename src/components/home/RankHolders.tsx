import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Medal, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const RankHolders: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rankHolders = [
    { 
      name: 'John Doe', 
      rank: 1, 
      percentage: 98.5, 
      stream: 'Computer Science',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      achievement: 'University Gold Medalist'
    },
    { 
      name: 'Jane Smith', 
      rank: 2, 
      percentage: 97.8, 
      stream: 'Commerce',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      achievement: 'Academic Excellence Award'
    },
    { 
      name: 'Mike Johnson', 
      rank: 3, 
      percentage: 96.9, 
      stream: 'Mathematics',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      achievement: 'Best Project Award'
    },
  ];

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Trophy className="h-10 w-10 text-yellow-500" />;
      case 2: return <Medal className="h-10 w-10 text-gray-400" />;
      case 3: return <Award className="h-10 w-10 text-amber-600" />;
      default: return <Star className="h-10 w-10 text-primary" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch(rank) {
      case 1: return 'from-yellow-400 to-yellow-600';
      case 2: return 'from-gray-400 to-gray-600';
      case 3: return 'from-amber-500 to-amber-700';
      default: return 'from-primary to-primary/70';
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % rankHolders.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + rankHolders.length) % rankHolders.length);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* FIXED CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="secondary" className="mb-4">Academic Excellence</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Our Rank Holders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Celebrating academic excellence and outstanding achievements
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {rankHolders.map((holder, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition transform hover:-translate-y-2">
              <div className={`h-2 bg-gradient-to-r ${getRankColor(holder.rank)}`} />
              <CardContent className="pt-6 pb-8">
                <div className="flex justify-center mb-4 relative">
                  <div className="absolute -top-2 -left-2">
                    {getRankIcon(holder.rank)}
                  </div>
                  <Avatar className="w-24 h-24 border-4 border-primary/20">
                    <AvatarImage src={holder.image} />
                    <AvatarFallback>{holder.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-lg font-semibold">{holder.name}</h3>
                <p className="text-xl font-bold text-primary">Rank #{holder.rank}</p>
                <p className="text-gray-600 text-sm">{holder.percentage}% - {holder.stream}</p>
                <Badge variant="outline" className="mt-2">{holder.achievement}</Badge>
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
              {rankHolders.map((holder, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <Card className="text-center">
                    <div className={`h-2 bg-gradient-to-r ${getRankColor(holder.rank)}`} />
                    <CardContent className="pt-6 pb-8">
                      <div className="flex justify-center mb-4 relative">
                        <div className="absolute -top-2 -left-2">
                          {getRankIcon(holder.rank)}
                        </div>
                        <Avatar className="w-20 h-20 border-4 border-primary/20">
                          <AvatarImage src={holder.image} />
                          <AvatarFallback>{holder.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                      <h3 className="text-base font-semibold">{holder.name}</h3>
                      <p className="text-lg font-bold text-primary">Rank #{holder.rank}</p>
                      <p className="text-xs text-gray-600">{holder.percentage}% - {holder.stream}</p>
                      <Badge variant="outline" className="text-xs mt-2">{holder.achievement}</Badge>
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
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white shadow"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {rankHolders.map((_, index) => (
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

export default RankHolders;