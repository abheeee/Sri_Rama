import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Building, Users, DollarSign, ChevronRight, Briefcase } from 'lucide-react';

const PlacementSection: React.FC = () => {

  const stats = [
    { label: 'Placement Rate', value: '95%', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Top Recruiters', value: '100+', icon: Building, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Students Placed', value: '2000+', icon: Users, color: 'text-purple-500', bg: 'bg-purple-50' },
    { label: 'Highest Package', value: '25 LPA', icon: DollarSign, color: 'text-orange-500', bg: 'bg-orange-50' },
  ];

  const recruiters = [
    'Google', 'Amazon', 'Microsoft', 'Infosys', 'TCS', 'Wipro', 
    'Accenture', 'Deloitte', 'IBM', 'Cognizant', 'Capgemini', 'HCL'
  ];

  const placementHighlights = [
    { year: '2023', rate: '94%', avgPackage: '8.5 LPA', students: 450 },
    { year: '2022', rate: '92%', avgPackage: '7.8 LPA', students: 420 },
    { year: '2021', rate: '90%', avgPackage: '7.2 LPA', students: 400 },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      
      {/* FIXED CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <Badge variant="secondary" className="mb-4">Career Opportunities</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Placement Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Our students have been recruited by top companies across various industries
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className={`p-4 md:p-6 text-center ${stat.bg}`}>
                <stat.icon className={`h-5 w-5 md:h-8 md:w-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-lg md:text-2xl font-bold">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Year-wise Placement Statistics
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">Year</th>
                      <th className="px-4 py-2 text-left">Placement Rate</th>
                      <th className="px-4 py-2 text-left">Average Package</th>
                      <th className="px-4 py-2 text-left">Students Placed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placementHighlights.map((item, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-3 font-semibold">{item.year}</td>
                        <td className="px-4 py-3">{item.rate}</td>
                        <td className="px-4 py-3">{item.avgPackage}</td>
                        <td className="px-4 py-3">{item.students}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recruiters */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg md:text-xl font-semibold text-center mb-4 md:mb-6">
            Our Top Recruiters
          </h3>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {recruiters.map((recruiter, index) => (
              <div
                key={index}
                className="bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm border"
              >
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  {recruiter}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Training */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          
          <Card className="md:col-span-2">
            <CardContent className="p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Training & Development Programs
              </h3>

              <ul className="space-y-2 text-sm md:text-base text-gray-600">
                <li>✓ Soft Skills & Communication Training</li>
                <li>✓ Aptitude & Reasoning Preparation</li>
                <li>✓ Technical Interview Preparation</li>
                <li>✓ Resume Building & LinkedIn Optimization</li>
                <li>✓ Mock Interviews & Group Discussions</li>
                <li>✓ Industry Guest Lectures & Workshops</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary text-white">
            <CardContent className="p-5 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Ready to Start Your Career?
              </h3>

              <p className="text-sm mb-4 text-primary-foreground/90">
                Join our placement program and get placed in top companies
              </p>

              <Button variant="secondary" className="w-full">
                Register Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default PlacementSection;