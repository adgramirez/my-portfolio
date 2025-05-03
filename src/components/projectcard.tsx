import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  device?: "laptop" | "mobile";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  device = "laptop", // default
}) => {
  const sizeClass =
    device === "mobile"
      ? "xl:max-w-xs md:max-w-sm" // narrower for phones
      : "xl:max-w-lg md:max-w-md"; // wider for laptops

  return (
    <div
      className="relative w-full h-auto rounded-2xl overflow-hidden group transform transition-transform duration-300 hover:scale-[1.03]"
    >
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-auto object-contain" />
      )}

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-zinc-300 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
