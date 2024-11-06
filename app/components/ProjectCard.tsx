import styles from './ProjectCard.module.css';
import Image from 'next/legacy/image';
import Video from 'next-video';  // Add this import

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h2>{project.name} <span>{project.date}</span></h2>
      <div className="tags">
        {project.tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: project.description }}></div>
      {project.images && project.images.length > 0 && (
        <div className="images">
          {project.images.map((imgObj, index) => 
            imgObj.type === 'video' ? (
              <div key={index} className="videoWrapper">
                <Video 
                  src={imgObj.src}
                  width={imgObj.width}
                  height={imgObj.height}
                />
              </div>
            ) : (
              <Image 
                key={index}
                src={imgObj.src}
                alt={imgObj.alt}
                width={imgObj.width || 500}
                height={imgObj.height || 300}
                loading={imgObj.loading || "lazy"}
                className={styles.image}
              />
            )
          )}
        </div>
      )}
      <div className={styles.links}>
        <p style={{ fontWeight: 500, fontSize: '12px' }}>
          Link(s):&nbsp;
          {project.links.map((link, idx) => (
            <span key={idx}>
              <a href={link.url}>{link.text}</a>
              {idx !== project.links.length - 1 && <span>,&nbsp;</span>}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;