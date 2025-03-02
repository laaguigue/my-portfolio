import Head from 'next/head';
import projects from '../data/projects';

export default function Projects() {
  return (
    <div>
      <Head>
        <title>My Projects</title>
      </Head>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}