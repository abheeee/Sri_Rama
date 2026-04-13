import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

const PlacementHero = () => {
  return (
    <section
      id="placement-cell"
      className="relative overflow-hidden scroll-mt-28 bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28"
    >
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
            Placements
          </Badge>

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <BriefcaseBusiness className="h-8 w-8" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Empowering Students for a Successful Career
          </h1>

          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            Our placement cell bridges the gap between academic learning and
            industry expectations by offering career guidance, training, and
            campus recruitment opportunities.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#recruiters">
              <Button size="lg" className="rounded-xl">
                View Recruiters
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <a href="#training">
              <Button size="lg" variant="outline" className="rounded-xl">
                Explore Training
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementHero;