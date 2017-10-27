import React from 'react';
import '../layouts/custom.css';
import data from '../data/data';

var sideProjectsList = data.sideProjects;
var appsList = data.apps;
var currentWorkList = data.currentWork;

const IndexPage = () => (
    <div>
        {/* <h2 className="section">Current Work</h2>

        {currentWorkList.map((project) => {
            return (<div key={project.title}>
                <a className="project" href={project.link} target="_blank">
                    <img className="project-image" src={project.img} alt="Project Image"/>
                    <div className="project-description">{project.description}</div>
                </a >
            </div>);
        })}

        <h2 className="section">Apps</h2>

        {appsList.map((project) => {
            return (<div key={project.title}>
                <a className="project" href={project.link} target="_blank">
                    <img className="project-image" src={project.img} alt="Project Image"/>
                    <div className="project-description">{project.description}</div>
                </a >
            </div>);
        })} */}


        <h2 className="section">Projects</h2>

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
