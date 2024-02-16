import React from 'react';
import { SiHeroku, SiRuby, SiRubyonrails } from "react-icons/si";
import { TbBrandReact, TbBrandJavascript, TbBrandHtml5, TbBrandCss3, TbBrandPhp, TbBrandLaravel, TbBrandNextjs, TbBrandReactNative, TbBrandSass, TbBrandGatsby, TbBrandGithub, TbBrandFigma, TbSql } from "react-icons/tb";

export default function Skills() {

  const skills = [
    { label: 'HTML', icon: <TbBrandHtml5 />, color: '#f06529' },
    { label: 'CSS', icon: <TbBrandCss3 />, color: '#264de4' },
    { label: 'Sass', icon: <TbBrandSass />, color: '#c69' },
    { label: 'JavaScript', icon: <TbBrandJavascript />, color: '#F05340' },
    { label: 'Ruby', icon: <SiRuby />, color: "#820C02" },
    { label: 'Ruby On Rails', icon: <SiRubyonrails />, color: '#CC0000' },
    { label: 'PHP', icon: <TbBrandPhp />, color: '#8993be' },
    { label: 'Laravel', icon: <TbBrandLaravel />, color: '#F05340' },
    { label: 'GatsbyJS', icon: <TbBrandGatsby />, color: 'rebeccapurple' },
    { label: 'NextJS', icon: <TbBrandNextjs /> },
    { label: 'GitHub', icon: <TbBrandGithub />, color: '#24292e' },
    { label: 'Figma', icon: <TbBrandFigma />, color: '#ff7262' },
    { label: 'Heroku', icon: <SiHeroku />, color: '#6567a5' },
    { label: 'PostgreSQL / SQLite', icon: <TbSql />, color: '#0064a5' },
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
