// components/ProjectCard.tsx
import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
    return (
      <div className="project-card">
        <h2>{project.name} <span>{project.date}</span></h2>
        <div className="tags">
          {project.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: project.description }}></div>
        <div className="images">
          {project.images.map((img, index) => 
          <img 
            key={index}
            src={img}
            alt={`Screenshot for ${project.name}`}
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
  