import { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { Box } from "@chakra-ui/react";

import useToast from "hooks/useToast";
import ConfirmModal from "components/modals/ConfirmModal";
import { ProjectPropType } from "Types/Project";
import { DELETE_PROJECTS } from "apollo/queries/project";

function ProjectDeleteContainer({ projects, onProjectDeletion, children }) {
  const { toast } = useToast();

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteProject, { loading }] = useMutation(DELETE_PROJECTS);

  function toggleDeleteProject() {
    if (projects.length === 0) {
      return toast({ title: "Please select at least one project to delete!", status: "warning" });
    }

    setIsDeleteOpen((prev) => !prev);
  }

  function handleDeleteProject() {
    deleteProject({
      variables: {
        ids: projects.map((project) => project.id),
      },
    })
      .then(() => {
        toast({
          title: `Successfully Deleted ${projects.length} Projects!`,
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
        description={`Are you sure you want to delete ${projects.length} Projects permanantly?`}
        onClose={toggleDeleteProject}
        onConfirm={handleDeleteProject}
      />

      <Box onClick={toggleDeleteProject}>{children}</Box>
    </>
  );
}

ProjectDeleteContainer.propTypes = {
  title: PropTypes.string,
  projects: PropTypes.arrayOf(ProjectPropType).isRequired,
  onProjectDeletion: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default ProjectDeleteContainer;
