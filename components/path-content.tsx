"use client";
import React from "react";
import { motion } from "framer-motion";

type PathContentProps = {
  selectedPath: string;
};

const PathContent = ({ selectedPath }: PathContentProps) => {
  const pathData: Record<string, { title: string; description: string; items: string[] }> = {
    level1: {
      title: "",
      description: "",
      items: [],
    },
  };

  const currentPath = pathData[selectedPath] || pathData.level1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg"
    >
      <h3 className="mb-4 text-2xl font-bold text-slate-800">{currentPath.title}</h3>
      <p className="mb-6 text-slate-600">{currentPath.description}</p>
      <ul className="space-y-3">
        {currentPath.items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <span className="mt-1 text-blue-600">✓</span>
            <span className="text-slate-700">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PathContent;

