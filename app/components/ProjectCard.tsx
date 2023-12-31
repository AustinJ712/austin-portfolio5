// components/ProjectCard.tsx
import styles from './ProjectCard.module.css';
import Image from 'next/image'

function ProjectCard({ project }) {
    return (
      <div className="project-card">
        <h2>{project.name} <span>{project.date}</span></h2>
        <div className="tags">
          {project.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: project.description }}></div>
        <div className="images">
          {project.images.map((imgObj, index) => 
            <Image 
              key={index}
              src={imgObj.src}
              alt={imgObj.src || `Screenshot for Austin Suhr ${project.name}`}
              layout="responsive"
              width={imgObj.width || 500}  // Replace with the original width of your image
              height={imgObj.height || 300} // Replace with the original height of your image
              loading={imgObj.loading || "lazy"}
              className={styles.image}
            />
          )}
        </div>
        <div className="links">
            <p style={{ fontWeight: 500, fontSize: '12px' }}>Link(s):&nbsp;
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
  