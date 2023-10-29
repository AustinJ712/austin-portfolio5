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
            <p style={{ fontWeight: 500, fontSize: '12px' }}>Links:&nbsp;
                <a href={project.demoLink}>CashRentstimate</a>
            </p>
        </div>
      </div>
    );
  }
  export default ProjectCard;
  