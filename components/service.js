import React from 'react';

const Service = ({ title, description, icon }) => {
    return (
        <div>
            <div className="flex items-center">
                <svg className="w-8 h-8 text-primary mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                </svg>
                <h3 className="text-lg font-medium">{title}</h3>
            </div>
            <p className="text-gray-800 dark:text-gray-300">{description}</p>
        </div>
    );
};

export default Service;
