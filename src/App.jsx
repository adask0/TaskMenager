import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProjectg(){
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, 
      };
    });

  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState)

  let content;

  if (projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProjectg} />
  }

  return (
    <main className="h-screen my-8 flex">
      <ProjectsSidebar onStartAddProject={handleStartAddProjectg} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
