// components/ProjectCard.tsx
import styles from './ProjectCard.module.css';
import Image from 'next/image';
import Video from 'next-video';  // Import Video from next-video

function ProjectCard({ project }) {
  // Check if the project is "Cita Reservations" to decide whether to use <Image /> or <Video />
  const isCitaReservations = project.name === 'Cita Reservations';

  return (
    <div className="project-card">
      <h2>{project.name} <span>{project.date}</span></h2>
      <div className="tags">
        {project.tags.map(tag => <span key={tag}>{tag}</span>)}
      </div>
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: project.description }}></div>
      <div className="images">
        {project.images.map((imgObj, index) => 
          isCitaReservations ? (
            // If it's the "Cita Reservations" project, use <Video /> instead of <Image />
            <Video 
              key={index}
              src={imgObj.src} // Make sure this is a video file
              layout="responsive"
              width={imgObj.width || 500}  // Replace with the original width of your video
              height={imgObj.height || 300} // Replace with the original height of your video
              controls
            />
          ) : (
            // Else, use <Image />
            <Image 
              key={index}
              src={imgObj.src}
              alt={imgObj.alt}
              layout="responsive"
              width={imgObj.width || 500}
              height={imgObj.height || 300}
              loading={imgObj.loading || "lazy"}
              className={styles.image}
            />
          )
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
  