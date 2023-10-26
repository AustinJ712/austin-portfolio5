import React from 'react';

interface Props {
    title: string;
    description: string;
    metric: string;
}

const NotableWorkItem: React.FC<Props> = ({ title, description, metric }) => {
    return (
        <div className="bg-white shadow-md rounded p-4 my-4 flex justify-start items-center">
            <div className="flex items-center flex-shrink-0 mr-4"> 
                <h2 className="text-black font-semibold text-base mr-2">{title}</h2>
                <svg width="18" height="18" stroke="currentColor" stroke-width="2" className="lucide-icon lucide lucide-arrow-up-right ml-2 text-neutral-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
            </div>
            <div className="flex-grow pl-4"> {/* Add left-padding to start from the center */}
                <p className="text-gray-600 text-base mb-2">{description}</p>
                <span className="text-sm text-gray-400">{metric}</span>
            </div>
        </div>
    );
}

export default NotableWorkItem;
