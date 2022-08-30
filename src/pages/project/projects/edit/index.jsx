import { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { Box } from "@chakra-ui/react";

import { ProjectPropType } from "types";
import { UPDATE_PROJECT } from "apollo/queries/project";
import useToast from "hooks/useToast";
import CommonModal from "components/modals/CommonModal";

import ProjectForm from "pages/project/projects/projectForm/ProjectForm";
import { PROJECT_FORM_SOURCE_EDIT } from "../projectForm/constants";

function ProjectEditContainer({ onProjectUpdate, project, children }) {
  const { toast } = useToast();

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [updateProject, { loading }] = useMutation(UPDATE_PROJECT);

  function toggleEditProject() {
    setIsEditOpen((prev) => !prev);
  }

  function handleSubmit(values) {
    const variables = {
      ...values,
      id: project.id,
    };

    updateProject({ variables })
      .then(({ data }) => {
        toast({
          title: "Project Updated Successfully!",
          status: "success",
        });

        if (onProjectUpdate) onProjectUpdate(data.updateProject);
        toggleEditProject();
      })
      .catch((err) => {
        toast({
          title: err.message,
          status: "error",
        });
      });
  }

  const initialValues = {
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
          source={PROJECT_FORM_SOURCE_EDIT}
        />
      </CommonModal>

      <Box onClick={toggleEditProject}>{children}</Box>
    </>
  );
}

ProjectEditContainer.propTypes = {
  onProjectUpdate: PropTypes.func,
  children: PropTypes.node.isRequired,
  project: ProjectPropType.isRequired,
};

export default ProjectEditContainer;
