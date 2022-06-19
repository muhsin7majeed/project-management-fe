const PROJECTS = [
  {
    id: 1,
    name: "Project One",
    status: "Completed",
  },
  {
    id: 2,
    name: "Project Two",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Project Three",
    status: "Started",
  },
];

function Landing() {
  return (
    <>
      {PROJECTS.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </>
  );
}

export default Landing;
