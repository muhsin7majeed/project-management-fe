import React, { ReactElement, useState } from "react";
import { useMutation } from "@apollo/client";
import { Box } from "@chakra-ui/react";

import { UPDATE_PROJECT } from "apollo/queries/project";
import { Project, ProjectFormValue, UpdateProjectVariables } from "types/project";
import { RegularFunction } from "types/common";
import { PROJECT_FORM_SOURCE } from "pages/project/projects/projectForm/constants";
import useToast from "hooks/useToast";
import CommonModal from "components/modals/CommonModal";
import ProjectForm from "pages/project/projects/projectForm/ProjectForm";

interface PropTypes {
  onProjectUpdate: RegularFunction;
  project: Project;
  children: ReactElement;
}

function ProjectEditContainer({ onProjectUpdate, project, children }: PropTypes) {
  const { toast } = useToast();

  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [updateProject, { loading }] = useMutation<unknown, UpdateProjectVariables>(UPDATE_PROJECT);

  function toggleEditProject() {
    setIsEditOpen((prev) => !prev);
  }

  function handleSubmit(values: ProjectFormValue) {
    const variables = {
      ...values,
      id: project.id,
    };

    updateProject({ variables })
      .then(() => {
        toast({
          title: "Project Updated Successfully!",
          status: "success",
        });

        if (onProjectUpdate) onProjectUpdate();
        toggleEditProject();
      })
      .catch((err) => {
        toast({
          title: err.message,
          status: "error",
        });
      });
  }

  const initialValues: ProjectFormValue = {
    name: project.name,
    client: project.client?.id,
    status: project.status,
    description: project.description,
  };

  return (
    <>
      <CommonModal isOpen={isEditOpen} onClose={toggleEditProject} title={"Update Project"}>
        <ProjectForm
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          loading={loading}
          source={PROJECT_FORM_SOURCE.EDIT}
        />
      </CommonModal>

      <Box onClick={toggleEditProject}>{children}</Box>
    </>
  );
}

export default ProjectEditContainer;
