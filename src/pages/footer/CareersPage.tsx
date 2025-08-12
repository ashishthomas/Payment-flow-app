import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Globe,
  ArrowRight,
  Search,
} from "lucide-react";
import toast from "react-hot-toast";
import { jobs } from "../../data/jobsData";

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  // State for the input value (typed text)
  const [searchInput, setSearchInput] = useState("");

  // State for the debounced search value
  const [searchQuery, setSearchQuery] = useState("");

  // Debounce logic: wait 500ms after typing stops to set `searchQuery`
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(searchInput);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, mental health support, and wellness programs",
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description:
        "Learning budget, conference attendance, and career development programs",
    },
    {
      icon: Globe,
      title: "Remote-First",
      description:
        "Work from anywhere with flexible hours and home office setup budget",
    },
    {
      icon: Users,
      title: "Inclusive Culture",
      description:
        "Diverse, inclusive workplace with employee resource groups and mentorship",
    },
  ];

  const departments = [
    "all",
    "Engineering",
    "Product",
    "Design",
    "Legal",
    "Customer Success",
    "Data",
    "Marketing",
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment =
      selectedDepartment === "all" || job.department === selectedDepartment;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const handleApply = (jobTitle: string) => {
    toast.success(
      `Application started for ${jobTitle}! You'll be redirected to our application portal.`
    );
  };

  return (
    <div className="pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-3 mb-6">
            <Briefcase className="text-lime-400" size={48} />
            <h1 className="text-5xl md:text-6xl font-light text-white">
              Careers
            </h1>
          </div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Join us in building the future of international finance. Help make
            money without borders the new normal.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-12">
            Why work at FlowPay?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-lime-400/10 border border-lime-400/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-lime-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold text-white text-center mb-8">
            Open positions
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl pl-12 pr-6 py-4 text-white placeholder-slate-400 focus:border-lime-400 focus:outline-none"
              />
            </div>

            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-6 py-4 text-white focus:border-lime-400 focus:outline-none"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "all" ? "All Departments" : dept}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Job Listings */}
        <div className="space-y-6 mb-20">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Briefcase size={16} />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleApply(job.title)}
                  className="bg-lime-400 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-2 mt-4 lg:mt-0"
                >
                  <span>Apply</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {job.description}
              </p>

              <div>
                <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              No positions found matching your criteria.
            </p>
            <p className="text-slate-500 mt-2">
              Try adjusting your search or check back later for new
              opportunities.
            </p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Don't see the right role?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people to join our mission. Send
            us your resume and we'll keep you in mind for future opportunities.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href =
                "mailto:hr@flowpay.com?subject=Resume Submission&body=Hi,%0D%0DPlease find my resume attached for your consideration.";
              setTimeout(() => {
                toast.success(
                  "Thanks for your interest! We'll be in touch if a suitable role opens up."
                );
              }, 3000); // 3-second delay so toast appears after mail opens
            }}
            className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-3"
          >
            <span>Send us your resume</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CareersPage;
