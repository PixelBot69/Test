import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './data'; // Ensure you import your projects data here
import img1 from './img1.jpg'; // Your custom logo images
import img2 from './img2.jpg';
import img3 from './img3.png';

const projectImages = [img1, img2, img3];

function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) return <div className="text-white">Project not found</div>;

  return (
    <div className="flex flex-col md:flex-row p-8 h-[100vh] bg-blue-600 overflow-hidden">
      <div className="md:w-1/3 flex flex-col items-center bg-black text-white rounded-lg shadow-lg p-6">
        <img src={projectImages[id]} alt={`${project.name} logo`} className="w-32 mt-[10rem] h-32 mb-4" />
        <h1 className="text-2xl font-bold">{project.name}</h1>
      </div>
      <div className="md:w-2/3 md:ml-6 bg-white text-black rounded-lg shadow-lg p-6 overflow-y-auto" style={{ maxHeight: '90vh' }}>
        <h2 className="text-xl font-semibold">Details</h2>
        {project.links.website && (
          <p><strong>Website:</strong> <a href={project.links.website} className="text-blue-600">{project.links.website}</a></p>
        )}
        {project.links.docs && (
          <p><strong>Docs:</strong> <a href={project.links.docs} className="text-blue-600">{project.links.docs}</a></p>
        )}
        {project.links.discord && (
          <p><strong>Discord:</strong> <a href={project.links.discord} className="text-blue-600">{project.links.discord}</a></p>
        )}
        {project.links.twitter && (
          <p><strong>Twitter:</strong> <a href={project.links.twitter} className="text-blue-600">{project.links.twitter}</a></p>
        )}
        {project.links.github && (
          <p><strong>GitHub:</strong> <a href={project.links.github} className="text-blue-600">{project.links.github}</a></p>
        )}
        {project.gettingStartedGuide && (
          <p><strong>Getting Started Guide:</strong> <a href={project.gettingStartedGuide} className="text-blue-600">{project.gettingStartedGuide}</a></p>
        )}
        <p className="mt-4"><strong>Description:</strong> {project.description}</p>
        <p><strong>One-Liner:</strong> {project.oneLiner}</p>

        {project.token.name && (
          <>
            <h3 className="mt-4 text-lg font-semibold">Token Information</h3>
            <p><strong>Name:</strong> {project.token.name}</p>
            <p><strong>Ticker:</strong> {project.token.ticker}</p>
            <p><strong>Denomination:</strong> {project.token.denomination}</p>
            <p><strong>Tokenomics Info:</strong> {project.token.tokenomics.info}</p>
            {project.token.tokenomics.linkToBlogorPaper && (
              <p><strong>More Info:</strong> <a href={project.token.tokenomics.linkToBlogorPaper} className="text-blue-600">{project.token.tokenomics.linkToBlogorPaper}</a></p>
            )}
          </>
        )}

        <h3 className="mt-4 text-lg font-semibold">Project Origin</h3>
        <p>{project.projectOrigin}</p>

        <h3 className="mt-4 text-lg font-semibold">Use Cases</h3>
        {project.useCases.map((useCase, index) => (
          <div key={index} className="mb-2">
            <p><strong>{useCase.name}:</strong> {useCase.info}</p>
            <p><strong>Live Link:</strong> <a href={useCase.liveLink} className="text-blue-600">{useCase.liveLink}</a></p>
          </div>
        ))}

        <h3 className="mt-4 text-lg font-semibold">Milestones</h3>
        {project.mileStones.map((milestone, index) => (
          <div key={index} className="mb-2">
            <p><strong>Goal:</strong> {milestone.goal} - <strong>Status:</strong> {milestone.status}</p>
            {milestone.proof && (
              <p><strong>Proof:</strong> <a href={milestone.proof} className="text-blue-600">{milestone.proof}</a></p>
            )}
          </div>
        ))}

        <h3 className="mt-4 text-lg font-semibold">Collaborations</h3>
        {project.collaborations.map((collaboration, index) => (
          <div key={index} className="mb-2">
            <p><strong>{collaboration.name}:</strong> <a href={collaboration.link} className="text-blue-600">{collaboration.info}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;
