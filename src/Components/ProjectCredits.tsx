import React from "react";
import { Link } from "react-router";

export interface ProjectCreditsProps {
  title: string;
  badge?: string;
  description: string;
  tags?: string[];
  className?: string;
}

export const ProjectCredits: React.FC<ProjectCreditsProps> = ({
  title,
  badge,
  description,
  tags = [],
  className = "",
}) => {
  return (
    <footer
      className={`w-full max-w-[1440px] px-6 sm:px-12 py-16 sm:py-24 border-t border-neutral-200 mt-12 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-10 ${className}`}
    >
      <div className="flex flex-col gap-3.5 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#e51921]">
          Proje Künyesi
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1A1A1A] flex items-center gap-3">
          {title}
          {badge && (
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
              {badge}
            </span>
          )}
        </h2>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6 shrink-0">
        <Link
          to="/projects"
          className="px-10 py-3.5 bg-[#e51921] text-white text-base font-normal tracking-wide hover:brightness-110 active:brightness-95 transition-all shadow-sm cursor-pointer"
        >
          Diğer Projeleri Keşfet
        </Link>
        <Link
          to="/#contact"
          className="px-10 py-3.5 border border-[#e51921] text-[#e51921] hover:bg-[#e51921] hover:text-white text-base font-normal tracking-wide transition-all cursor-pointer"
        >
          Birlikte Çalışalım
        </Link>
      </div>
    </footer>
  );
};

export default ProjectCredits;
