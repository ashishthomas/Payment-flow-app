import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "all",
    "Company News",
    "Product Updates",
    "Industry Insights",
    "Press Releases",
  ];

  const newsArticles = [
    {
      id: 1,
      title: "FlowPay Reaches 16 Million Customers Worldwide",
      category: "Company News",
      date: "2024-01-15",
      author: "Sarah Chen",
      excerpt:
        "FlowPay celebrates a major milestone as we welcome our 16 millionth customer, marking unprecedented growth in international money transfers.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "New Multi-Currency Business Accounts Now Available",
      category: "Product Updates",
      date: "2024-01-10",
      author: "Marcus Johnson",
      excerpt:
        "Businesses can now hold and manage money in 50+ currencies with our new business account features, including advanced reporting and team management.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "5 min read",
    },
    {   
      id: 3,
      title: "The Future of Cross-Border Payments: 2024 Trends",
      category: "Industry Insights",
      date: "2024-01-05",
      author: "Priya Patel",
      excerpt:
        "Our analysis of emerging trends in international finance, from digital currencies to regulatory changes shaping the industry.",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "FlowPay Partners with Major European Banks",
      category: "Press Releases",
      date: "2023-12-20",
      author: "James Wilson",
      excerpt:
        "Strategic partnerships with leading European financial institutions to expand our network and improve transfer speeds across the continent.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Enhanced Security Features Launched",
      category: "Product Updates",
      date: "2023-12-15",
      author: "Sarah Chen",
      excerpt:
        "New biometric authentication and advanced fraud detection systems provide even stronger protection for customer accounts.",
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "FlowPay Wins FinTech Innovation Award 2023",
      category: "Company News",
      date: "2023-12-01",
      author: "Marcus Johnson",
      excerpt:
        "Recognition for our groundbreaking approach to international money transfers and commitment to financial inclusion.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "3 min read",
    },
    {
      id: 7,
      title: "Regulatory Compliance: Our Commitment to Trust",
      category: "Industry Insights",
      date: "2023-11-25",
      author: "James Wilson",
      excerpt:
        "How FlowPay maintains the highest standards of regulatory compliance across all markets we operate in.",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "6 min read",
    },
    {
      id: 8,
      title: "Mobile App Update: Faster, Smarter, Better",
      category: "Product Updates",
      date: "2023-11-20",
      author: "Priya Patel",
      excerpt:
        "Our latest mobile app update includes AI-powered insights, improved navigation, and faster transaction processing.",
      image:
        "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=800",
      readTime: "4 min read",
    },
  ];

  const filteredArticles = newsArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            FlowPay <span className="text-lime-400 font-medium">News</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news, product updates, and insights
            from the world of international finance.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl pl-12 pr-6 py-4 text-white placeholder-slate-400 focus:border-lime-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-lime-400 text-slate-900"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {category === "all" ? "All News" : category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-lime-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">
                      {filteredArticles[0].category}
                    </span>
                    <span className="text-slate-400 text-sm">
                      {filteredArticles[0].readTime}
                    </span>
                  </div>

                  <h2 className="text-3xl font-semibold text-white mb-4">
                    {filteredArticles[0].title}
                  </h2>

                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {filteredArticles[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-slate-400 text-sm">
                      <div className="flex items-center space-x-2">
                        <User size={16} />
                        <span>{filteredArticles[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{formatDate(filteredArticles[0].date)}</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-lime-400 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition-colors inline-flex items-center space-x-2"
                    >
                      <span>Read more</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden cursor-pointer hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900/80 text-white px-3 py-1 rounded-full text-xs">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Tag className="text-slate-400" size={14} />
                  <span className="text-slate-400 text-sm">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-slate-500 text-xs">
                  <div className="flex items-center space-x-2">
                    <User size={12} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={12} />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              No articles found matching your criteria.
            </p>
            <p className="text-slate-500 mt-2">
              Try adjusting your search or category filter.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border border-lime-400/30 rounded-3xl p-12 text-center mt-20"
        >
          <h2 className="text-4xl font-semibold text-white mb-6">
            Stay in the loop
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important updates,
            product launches, and industry insights.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-4 text-white placeholder-slate-400 focus:border-lime-400 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-lime-300 transition-colors whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsPage;
