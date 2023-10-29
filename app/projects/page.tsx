// pages/projects.tsx
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    {
      name: 'CashRentstimate algorithm',
      date: 'June 2023',
      tags: ['Python', 'SQL', 'Machine Learning'],
      description: 'The CashRentstimate tool estimates the value of a tillable property in a cash rental agreement. CommonGround uses a combination of public and proprietary data to formulate the CashRentstimate including data points like soil health, historic yields, location, irrigation status, and more.',
      images: ['images/cashrentstimate-2.png'],
      demoLink: 'https://demo.link'
    },
    {
      name: 'Multiparcel Auction System',
      date: 'June 2023',
      tags: ['Python', 'UI/UX', 'Database Architecture'],
      description: 'The CashRentstimate tool estimates the value of a tillable property in a cash rental agreement. CommonGround uses a combination of public and proprietary data to formulate the CashRentstimate including data points like soil health, historic yields, location, irrigation status, and more.',
      images: ['images/multiparcel-auction.png'],
      demoLink: 'https://demo.link'
    },
    {
      name: 'Cita Reservations',
      date: 'June 2023',
      tags: ['UI/UX', 'Database Architecture'],
      description: 'The CashRentstimate tool estimates the value of a tillable property in a cash rental agreement. CommonGround uses a combination of public and proprietary data to formulate the CashRentstimate including data points like soil health, historic yields, location, irrigation status, and more.',
      images: ['images/multiparcel-auction.png'],
      demoLink: 'https://demo.link'
    },
    // ... more projects
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} id={project.name.toLowerCase().replace(/\s+/g, '-')}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
