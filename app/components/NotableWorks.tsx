// components/NotableWorks.tsx

import React from 'react';
import NotableWorkItem from './NotableWorkItem';

interface WorkProps {
    title: string;
    description: string;
    metric: string;
}

interface Props {
    works: WorkProps[];
}

const NotableWorks: React.FC<Props> = ({ works }) => {
    return (
        <div className="space-y-4">
            {works.map(work => (
                <NotableWorkItem 
                    key={work.title} 
                    title={work.title} 
                    description={work.description}
                    metric={work.metric}
                />
            ))}
        </div>
    );
}

export default NotableWorks;