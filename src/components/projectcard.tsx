import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <div className="w-full max-w-lg p-15 bg-zinc-700 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-zinc-600">
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-300 text-sm sm:text-base">{description}</p>
    </div>
  );
};

export default ProjectCard;