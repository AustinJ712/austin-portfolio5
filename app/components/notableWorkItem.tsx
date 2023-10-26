// components/NotableWorkItem.tsx

import React from 'react';

interface Props {
    title: string;
    description: string;
    link: string;
}

const NotableWorkItem: React.FC<Props> = ({ title, description, link }) => {
    return (
        <div className="bg-white shadow-md rounded p-4 my-4">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
            >
                View Project
            </a>
        </div>
    );
}

export default NotableWorkItem;
