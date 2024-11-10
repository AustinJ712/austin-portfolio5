// components/ProjectCard.tsx
import Image from 'next/legacy/image';
import Video from 'next-video';

function ProjectCard({ project }) {
  return (
    <div className="mb-16 max-w-[600px]">
      <div className="flex items-baseline mb-4 gap-4">
        <h2 className="text-2xl font-bold text-black">{project.name}</h2>
        <span className="text-neutral-400 text-base">{project.date}</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span 
            key={tag} 
            className="px-3 py-1 bg-neutral-100 rounded-full text-sm font-semibold text-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div 
        className="text-neutral-700 leading-relaxed mb-8 text-base font-medium"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
      
      {project.images && project.images.length > 0 && (
        <div className="mb-8">
          {project.images.map((mediaObj, index) => (
            <div key={index} className="relative aspect-[3/2]">
              {mediaObj.type === 'video' ? (
                <Video 
                  src={mediaObj.src}
                  className="rounded-lg w-full"
                  controls
                  autoPlay={true}
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image 
                  src={mediaObj.src}
                  alt={mediaObj.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  loading={mediaObj.loading || "lazy"}
                />
              )}
            </div>
          ))}
        </div>
      )}
      
      {project.links && project.links.length > 0 && (
        <div className="text-sm font-medium">
          <span className="text-neutral-500">Link(s):&nbsp;</span>
          {project.links.map((link, idx) => (
            <span key={idx}>
              <a 
                href={link.url} 
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
              {idx !== project.links.length - 1 && <span>,&nbsp;</span>}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;