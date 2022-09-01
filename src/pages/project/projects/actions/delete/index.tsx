import React, { ReactNode, useState } from "react";
import { useMutation } from "@apollo/client";
import { Box } from "@chakra-ui/react";

import useToast from "hooks/useToast";
import { DeleteProjectVariables, Project } from "types/project";
import { RegularFunction } from "types/common";
import { DELETE_PROJECTS } from "apollo/queries/project";
import ConfirmModal from "components/modals/ConfirmModal";

interface PropTypes {
  projects: Project[];
  children: ReactNode;
  onProjectDeletion: RegularFunction;
}

function ProjectDeleteContainer({ projects, onProjectDeletion, children }: PropTypes) {
  const { toast } = useToast();

  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [deleteProject, { loading }] = useMutation<unknown, DeleteProjectVariables>(DELETE_PROJECTS);

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

export default ProjectDeleteContainer;
