"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const KeyFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const features = [
    {
      id: 1,
      title: "AI-Powered Contract Review",
      description: "Automatically scans contracts for risks, obligations, and key clauses.",
      benefit: "Reduce legal review time by 60%.",
      icon: "📄"
    },
    {
      id: 2,
      title: "Smart Alerts & Reminders",
      description: "Get notified about upcoming deadlines and critical dates.",
      benefit: "Never miss an obligation again.",
      icon: "🔔"
    },
    {
      id: 3,
      title: "Secure Document Storage",
      description: "Keep contracts safe & encrypted with bank-grade security.",
      benefit: "Smart search allows users to find any document instantly.",
      icon: "🔒"
    },
    {
      id: 4,
      title: "Seamless Integrations",
      description: "Works with Google Drive, Dropbox, and CRM tools.",
      benefit: "Export reports and share insights instantly.",
      icon: "🔄"
    }
  ];

  // Card animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  // Staggered animation for cards
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-12 max-w-6xl mx-auto"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"
          variants={cardVariants}
          whileHover="hover"
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3 }}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <motion.div 
            className="text-4xl mb-4"
            animate={{ rotate: hoveredCard === feature.id ? [0, -10, 10, -10, 10, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            {feature.icon}
          </motion.div>
          
          <motion.h2 
            className="text-xl font-bold mb-3 text-gray-800 dark:text-white"
          >
            {feature.title}
          </motion.h2>
          
          <motion.div 
            className="bg-blue-500 h-1 w-16 rounded mb-4"
            whileHover={{ width: "60%" }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.p className="text-gray-600 dark:text-gray-300 mb-2">
            {feature.description}
          </motion.p>
          
          <motion.p 
            className="font-semibold text-blue-600 dark:text-blue-400"
            animate={{ 
              scale: hoveredCard === feature.id ? [1, 1.05, 1] : 1 
            }}
            transition={{ duration: 0.5, repeat: hoveredCard === feature.id ? Infinity : 0, repeatDelay: 1.5 }}
          >
            {feature.benefit}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default KeyFeatures;