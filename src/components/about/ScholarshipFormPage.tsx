import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ScholarshipFormState = {
  name: string;
  email: string;
  phone: string;
  course: string;
  scholarship: string;
  income: string;
  message: string;
};

export default function ScholarshipForm() {
  const [form, setForm] = useState<ScholarshipFormState>({
    name: "",
    email: "",
    phone: "",
    course: "",
    scholarship: "",
    income: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const field = e.target.name as keyof ScholarshipFormState;
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all required fields");
      return;
    }

    // You can connect backend here (MongoDB)
    console.log(form);

    alert("Application submitted successfully 🎉");

    setForm({
      name: "",
      email: "",
      phone: "",
      course: "",
      scholarship: "",
      income: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 px-6 py-12">

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-gray-800">
          Scholarship Application
        </h1>
        <p className="text-gray-600 mt-3">
          Apply for scholarships and take a step toward your future.
        </p>
      </motion.div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <Card className="rounded-3xl backdrop-blur-lg bg-white/70 border border-white/40 shadow-xl">
          <CardContent className="p-8">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone *
                </label>
                <Input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>

              {/* Course */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Course
                </label>
                <Input
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  placeholder="Enter your course"
                />
              </div>

              {/* Scholarship Type */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Scholarship Type
                </label>
                <select
                  name="scholarship"
                  value={form.scholarship}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option value="">Select</option>
                  <option>Merit-Based</option>
                  <option>Need-Based</option>
                  <option>Sports</option>
                  <option>Minority</option>
                </select>
              </div>

              {/* Family Income */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Annual Family Income
                </label>
                <Input
                  name="income"
                  value={form.income}
                  onChange={handleChange}
                  placeholder="Enter income"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Additional Information
                </label>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any additional details..."
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-3"
              >
                Submit Application
              </Button>

            </form>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
}