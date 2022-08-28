import { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { DeleteIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

import useToast from "hooks/useToast";
import ConfirmModal from "components/modals/ConfirmModal";
import { ProjectPropType } from "Types/Project";
import { DELETE_PROJECT } from "apollo/queries/project";

function ProjectDeleteContainer({ project, onProjectDeletion }) {
  const { toast } = useToast();

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteProject, { loading }] = useMutation(DELETE_PROJECT);

  function toggleDeleteProject() {
    setIsDeleteOpen((prev) => !prev);
  }

  function handleDeleteProject() {
    deleteProject({ variables: { id: project.id } })
      .then(() => {
        toast({
          title: `${project.name} Deleted Successfully!`,
          status: "success",
        });

        if (onProjectDeletion) onProjectDeletion();
        toggleDeleteProject();
      })
      .catch((err) => {
        toast({
          title: err.message,
          status: "error",
        });
      });
  }

  return (
    <>
      <ConfirmModal
        isOpen={isDeleteOpen}
        isLoading={loading}
        variant="danger"
        description={`Are you sure you want to delete ${project.name} permanantly?`}
        onClose={toggleDeleteProject}
        onConfirm={handleDeleteProject}
      />

      <Button mt={2} colorScheme="red" rightIcon={<DeleteIcon />} onClick={toggleDeleteProject} width="100%">
        Delete
      </Button>
    </>
  );
}

ProjectDeleteContainer.propTypes = {
  title: PropTypes.string,
  project: ProjectPropType.isRequired,
  onProjectDeletion: PropTypes.func,
};

export default ProjectDeleteContainer;
