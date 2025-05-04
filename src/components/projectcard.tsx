import React, { useEffect, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrls?: string[];
  device?: "laptop" | "mobile";
  tags?: string[];
  pageUrl?: string;
  gitHubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrls = [],
  tags = [],
  pageUrl,
  gitHubUrl,
  device, // default
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    if (imageUrls.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [imageUrls]);
  // const sizeClass =
  //   device === "mobile"
  //     ? "xl:max-w-xs md:max-w-sm" // narrower for phones
  //     : "xl:max-w-lg md:max-w-md"; // wider for laptops

  return (
    <div className="relative w-full h-auto rounded-2xl overflow-hidden group transform transition-transform duration-300 hover:scale-[1.03]">
      {imageUrls.length > 0 && (
        <img
          src={imageUrls[currentImageIndex]}
          alt={title}
          className="w-full h-auto object-contain transition-all duration-700 ease-in-out"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900/80 backdrop-blur-md flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t border-zinc-600/40"
      >
        {/* Content for laptop */}
      {device === "laptop" ? (
        <>
          <div className="space-y-4">
            {/* Tags on top */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium text-white px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-md backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h3 className="text-xl sm:text-2xl font-semibold text-white">{title}</h3>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl text-justify">
              {description}
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            {pageUrl && (
              <a
                href={pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-md hover:scale-105 transition-transform shadow-lg"
              >
                Visit Site
              </a>
            )}
            {gitHubUrl && (
              <a
                href={gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-md hover:scale-105 transition-transform shadow-lg"
              >
                GitHub
              </a>
            )}
          </div>
        </>
      ) : (
        // Content for mobile
        <>
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">{title}</h3>
            <p className="text-zinc-300 text-sm sm:text-base">{description}</p>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-medium text-white px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-md backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {gitHubUrl && (
            <a
              href={gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start mt-6 px-4 py-2 text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-md hover:scale-105 transition-transform shadow-lg"
            >
              GitHub
            </a>
          )}
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default ProjectCard;
