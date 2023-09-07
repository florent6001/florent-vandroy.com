import React from 'react';
import { TbBrandReact, TbBrandJavascript, TbBrandHtml5, TbBrandCss3, TbBrandPhp, TbBrandLaravel, TbBrandSymfony, TbBrandNextjs, TbBrandReactNative, TbBrandSass, TbBrandGatsby } from "react-icons/tb";
import { SiCodeigniter, SiRuby, SiRubyonrails } from "react-icons/si";

export default function Skills() {
    
    const skills = [
        { label: 'HTML', icon: <TbBrandHtml5 />, color: '#f06529;' },
        { label: 'CSS', icon: <TbBrandCss3 />, color: '#264de4' },
        { label: 'Sass', icon: <TbBrandSass />, color: '#c69' },
        { label: 'JavaScript', icon: <TbBrandJavascript />, color: '#f0db4f' },
        { label: 'GatsbyJS', icon: <TbBrandGatsby />, color: 'rebeccapurple' },
        { label: 'React', icon: <TbBrandReact />, color: '#61DBFB' },
        { label: 'React Native', icon: <TbBrandReactNative />, color: '#61dbfb' },
        { label: 'NextJS', icon: <TbBrandNextjs /> },
        { label: 'PHP', icon: <TbBrandPhp />, color: '#8993be' },
        { label: 'CodeIgniter', icon: <SiCodeigniter />, color: '#dd4814' },
        { label: 'Laravel', icon: <TbBrandLaravel />, color: '#F05340' },
        { label: 'Symfony', icon: <TbBrandSymfony /> },
        { label: 'Ruby', icon: <SiRuby />, color: "#820C02" },
        { label: 'Ruby On Rails', icon: <SiRubyonrails />, color: '#CC0000' },
    ];

    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 mt-5">
            {skills.map((skill, index) => (
                <div key={index} className="dark:bg-gray-800 bg-gray-300 p-4">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-4xl" style={{ color: skill.color }}>{skill.icon}</span>
                        <span className="mt-2">{skill.label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};