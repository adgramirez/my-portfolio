import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="relative w-full sm:w-[90%] md:w-[85%] lg:w-[95%] xl:max-w-md mx-auto rounded-2xl overflow-hidden group transform transition-transform duration-300 hover:scale-[1.03]">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-zinc-300 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
