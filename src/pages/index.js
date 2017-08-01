import React from 'react';

import '../layouts/custom.css';
import image1 from '../images/gcitlms.jpg';
import data from '../data/data';

console.log('data');

console.log(data);

var loop = [1, 2, 3, 4, 5];

var sideProjectsList = data.sideProjects;
// {
//     "title": "Four Learning Stages",
//     "link": "http://Ashikul.github.io/four-learning-stages",
//     "img": "images/fourlearningstages.jpg",
//     "description": "Learn about the 4 steps to learning anything",
//     "tech": "ReactJS, Redux"
// },
const IndexPage = () => (
    <div>
        <h2 className="section">Currently working on</h2>



        {/*<a className="project" href="http://lms-ashikul.rhcloud.com/" target="_blank">*/}
            {/*<img className="project-image" src={image1} alt="Project Image"/>*/}
            {/*<div className="project-description">Training project using JSP, Spring MVC, SQL</div>*/}
        {/*</a>*/}

        <h2 className="section">Apps</h2>

        <h2 className="section">Side Projects</h2>

        {sideProjectsList.map((project) => {
            return (<div key={project.title}>
                <a className="project" href={project.link} target="_blank">
                    <img className="project-image" src={project.img} alt="Project Image"/>
                    <div className="project-description">{project.description}</div>
                </a >
            </div>);
        })}
    </div>
)

export default IndexPage
