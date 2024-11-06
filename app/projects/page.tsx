// pages/projects.tsx
import ProjectCard from '../components/ProjectCard';
import Footer from "../Footer";
import supportsColor from "supports-color";
import Video from 'next-video'
import citaPrototype2 from '/videos/citaPrototype2.mp4';
import { link } from 'fs';

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
          loading: 'eager',
          width: 600,
          height: 400,
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
      description: `Multi-parcel auctions, also known as multi-unit auctions, are a method used for selling multiple, separate land parcels simultaneously in a single auction event. In this auction format, bidders can bid on individual parcels, combinations of parcels, or the entire collection of parcels as a whole. The goal is to maximize the total revenue generated from the sale while allowing bidders the flexibility to determine the most valuable combinations for themselves. The winning combination of bids is typically determined based on the highest total revenue generated or other predefined objectives. Multi-parcel auctions have gained popularity due to their efficiency and ability to accommodate the diverse needs of both buyers and sellers. <br /><br />I led the creation, ideation, and development of the land industry's first fully online multi-parcel auction bidding system. In order to do so, I created a python simulation of a multi-parcel auction bidding system, designed the database architecture required for this system, and led the UI/UX designs efforts to implement it`,
      images: [
        {
          src: '/images/multiparcel-auction-1.png',
          alt: 'Austin Suhr Multiparcel Auction Bidding System Visualization',
          loading: 'lazy',
          width: 600,
          height: 400,
        },
      ],
      links: [
        {
          url: 'https://replit.com/@AustinSuhr/MPA8?v=1',
          text: 'Replit'
        },
      ]
    },
    /*{
      name: 'Cita Reservations',
      date: 'June 2022',
      tags: ['Design', 'UI/UX', 'Database Architecture'],
      description: `Cita Reservations is a platform selling access to the country's most sought after reservations. Participating restaurants include Carbone, Mother Wolf Los Angeles, 4 Charles Prime Rib, and more. <br /><br />I founded the company to solve a problem: I wanted to go to the restaurants I wanted to without having to plan a month in advance. Cita solved this problem for me and for a few thousand others before being served a cease and desist letter by American Express (the owner of Resy).<br /><br />I had a ton of fun.`,
      images: [
        {
          src: {citaPrototype2},
          type: 'video',  // Add this to identify it as a video
          width: 600,
          height: 400,
          alt: 'Cita Reservations Prototype Video',
          loading: 'lazy',
        },
      ],
      links: [
        // Add any relevant links here
      ]
    },*/
    {
      name: 'Lockhop',
      date: 'June 2024',
      tags: ['Design', 'Database archtecture', 'Mongodb', 'GraphQL', 'React', 'Node.js'],
      description: 'CTO',
      images: [
        {
          src: '/images/lockhop.png',
          alt: 'Austin Suhr Multiparcel Auction Bidding System Visualization',
          loading: 'lazy',
          width: 600,
          height: 400,
        },
      ],
      links: [
        {
          url: 'https://lockhop.com',
          text: 'Lockhop'
        },
      ]
    },
    {
      name: 'Melrose Technology',
      date: 'January 2024',
      tags: ['Python', 'Conversational AI', 'Real estate'],
      description: 'Founder',
      images: [
        {
          src: '/images/melrose-technology.png',
          alt: 'Austin Suhr Multiparcel Auction Bidding System Visualization',
          loading: 'lazy',
          width: 600,
          height: 348,
        },
      ],
      links: [
        {
          url: 'https://www.melroserealestatetechnology.com/',
          text: 'Melrose Technology'
        },
      ]
    },
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
