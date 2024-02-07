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

  let content;

  if (projectsState.selectedProjectId === null){
    content = <NewProject />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProjectg} />
  }

  return (
    <main className="h-screen my-8 flex">
      <ProjectsSidebar onStartAddProject={handleStartAddProjectg} />
      {content}
    </main>
  );
}

export default App;
