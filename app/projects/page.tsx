// pages/projects.tsx
import ProjectCard from '../components/ProjectCard';
import Footer from "../Footer";
import supportsColor from "supports-color";

function Projects() {
  const projects = [
    {
      name: 'CashRentstimate algorithm',
      date: 'June 2023',
      tags: ['Python', 'SQL', 'Machine Learning'],
      description: 'The CashRentstimate tool estimates the value of a tillable property in a cash rental agreement. CommonGround uses a combination of public and proprietary data to formulate the CashRentstimate including data points like soil health, historic yields, location, irrigation status, and more.',
      images: [
        {
          src: '/images/cashrentstimate-4.png',
          alt: 'Austin Suhr CashRentstimate Tool Visualization',
          loading: 'eager', // or 'lazy'
          width: 600, // example width
          height: 400, // example height
        },
      ],
      links: [
        {
          url: 'https://commonground.io/app/cashrentstimate',
          text: 'CashRentstimate Tool'
        },
      ]
    },
    {
      name: 'Multiparcel Auction System',
      date: 'June 2023',
      tags: ['Python', 'UI/UX', 'Database Architecture'],
      description: 'Multi-parcel auctions, also known as multi-unit auctions, are a method used for selling multiple, separate land parcels simultaneously in a single auction event. In this auction format, bidders can bid on individual parcels, combinations of parcels, or the entire collection of parcels as a whole. The goal is to maximize the total revenue generated from the sale while allowing bidders the flexibility to determine the most valuable combinations for themselves. The winning combination of bids is typically determined based on the highest total revenue generated or other predefined objectives. Multi-parcel auctions have gained popularity due to their efficiency and ability to accommodate the diverse needs of both buyers and sellers. <br /><br />These types of auctions are the most complicated auctions but common within the land auction industry. Creating the best multi-parcel auction solution will allow us to provide an offering that is unmatched with other auction providers.',
      images: [
        {
          src: '/images/multiparcel-auction-1.png',
          alt: 'Austin Suhr Multiparcel Auction Bidding System Visualization',
          loading: 'lazy', // or 'eager'
          width: 600, // example width
          height: 400, // example height
        },
      ],
      links: [
        {
          url: 'https://replit.com/@AustinSuhr/MPA8?v=1',
          text: 'Replit'
        },
      ]
    }
    /*
    {
      name: 'Cita Reservations',
      date: 'June 2023',
      tags: ['UI/UX', 'Database Architecture'],
      description: 'Multi-parcel auctions, also known as multi-unit auctions, are a method used for selling multiple, separate land parcels simultaneously in a single auction event. In this auction format, bidders can bid on individual parcels, combinations of parcels, or the entire collection of parcels as a whole. The goal is to maximize the total revenue generated from the sale while allowing bidders the flexibility to determine the most valuable combinations for themselves. The winning combination of bids is typically determined based on the highest total revenue generated or other predefined objectives. Multi-parcel auctions have gained popularity due to their efficiency and ability to accommodate the diverse needs of both buyers and sellers. <br /><br />These types of auctions are the most complicated auctions but common within the land auction industry. Creating the best multi-parcel auction solution will allow us to provide an offering that is unmatched with other auction providers.',
      images: [
        {
          src: '/images/multiparcel-auction-1.png',
          alt: 'Austin Suhr Multiparcel Auction Bidding System Visualization',
          loading: 'lazy', // or 'eager'
          width: 600, // example width
          height: 400, // example height
        },
      ],
      links: [
        {
          url: 'https://demo1.link',
          text: 'Demo 1'
        },
      ]
    },
  */
    // ... more projects
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} id={project.name.toLowerCase().replace(/\s+/g, '-')}>
          <ProjectCard project={project} />
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Projects;
