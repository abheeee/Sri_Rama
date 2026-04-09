import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Globe, Laptop2 } from "lucide-react";

const recruiters = [
  { name: "Infosys", role: "IT Services", icon: Laptop2 },
  { name: "TCS", role: "Technology Services", icon: Building2 },
  { name: "Wipro", role: "Software Solutions", icon: Globe },
  { name: "Capgemini", role: "Consulting & IT", icon: Laptop2 },
  { name: "HCL", role: "Engineering Services", icon: Building2 },
  { name: "Cognizant", role: "Digital Services", icon: Globe },
];

const RecruitersSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <Badge variant="secondary" className="mb-4">
            Top Recruiters
          </Badge>
          <h2 className="text-3xl font-bold">Companies Visiting Our Campus</h2>
          <p className="mt-3 text-muted-foreground">
            Students get opportunities in leading companies from various sectors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recruiters.map((company) => {
            const Icon = company.icon;
            return (
              <Card key={company.name} className="rounded-2xl shadow-sm">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.role}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;