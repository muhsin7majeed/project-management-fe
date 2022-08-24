import { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

import CommonModal from "components/modals/CommonModal";
import ProjectForm from "./ProjectForm";

function ProjectContainer() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  function toggleCreateProject() {
    setIsCreateOpen((prev) => !prev);
  }

  return (
    <>
      <Button onClick={toggleCreateProject}>
        Create <AddIcon ml={2} />
      </Button>

      <CommonModal isOpen={isCreateOpen} onClose={toggleCreateProject} title={"Create Project"}>
        <ProjectForm />
      </CommonModal>
    </>
  );
}

export default ProjectContainer;
