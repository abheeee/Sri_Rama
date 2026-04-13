import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Briefcase,
  MessageSquareText,
  MonitorSmartphone,
  UserRoundCheck,
  BookOpenCheck,
} from "lucide-react";

const programs = [
  {
    title: "Aptitude Training",
    description:
      "Regular training sessions are conducted on quantitative aptitude, logical reasoning, and verbal ability.",
    icon: Brain,
  },
  {
    title: "Soft Skills Development",
    description:
      "Students are trained in communication, teamwork, confidence building, and personality development.",
    icon: MessageSquareText,
  },
  {
    title: "Mock Interviews",
    description:
      "Practice interviews are arranged to improve student confidence and interview performance.",
    icon: UserRoundCheck,
  },
  {
    title: "Technical Training",
    description:
      "Special technical sessions help students improve programming skills and domain knowledge.",
    icon: MonitorSmartphone,
  },
  {
    title: "Resume Building",
    description:
      "Guidance is provided to create professional resumes suitable for campus recruitment drives.",
    icon: BookOpenCheck,
  },
  {
    title: "Career Guidance",
    description:
      "Faculty and industry experts guide students in career planning and placement preparation.",
    icon: Briefcase,
  },
];

const TrainingPrograms = () => {
  return (
    <section
      id="training"
      className="w-full scroll-mt-28 bg-muted/30 py-16 md:py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm">
            Placement Training
          </Badge>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Training Programs for Students
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Our placement cell prepares students for recruitment through
            structured training and career-focused activities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <Card
                key={program.title}
                className="rounded-2xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-semibold">{program.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;