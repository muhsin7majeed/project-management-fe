import { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { AddIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

import { CREATE_PROJECT } from "apollo/queries/project";
import useToast from "hooks/useToast";
import CommonModal from "components/modals/CommonModal";

import ProjectForm from "../projectForm/ProjectForm";

function ProjectCreateContainer({ onProjectCreation }) {
  const { toast } = useToast();

  const [createProject, { loading }] = useMutation(CREATE_PROJECT);

  const [isCreateOpen, setIsCreateOpen] = useState(false);

  function toggleCreateProject() {
    setIsCreateOpen((prev) => !prev);
  }

  function handleSubmit(values) {
    createProject({ variables: values })
      .then(({ data }) => {
        toast({
          title: "Project Created Successfully",
          status: "success",
        });

        onProjectCreation(data.createProject);
        toggleCreateProject();
      })
      .catch((err) => {
        toast({
          title: err.message,
          status: "error",
        });
      });
  }

  const initialValues = {
    name: "",
    client: "",
    status: "Pending",
    description: "",
  };

  return (
    <>
      <CommonModal isOpen={isCreateOpen} onClose={toggleCreateProject} title={"Create Project"}>
        <ProjectForm initialValues={initialValues} handleSubmit={handleSubmit} loading={loading} />
      </CommonModal>

      <Button onClick={toggleCreateProject}>
        Create <AddIcon ml={2} />
      </Button>
    </>
  );
}

ProjectCreateContainer.propTypes = {
  onProjectCreation: PropTypes.func,
};

export default ProjectCreateContainer;
