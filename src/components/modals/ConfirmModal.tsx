import React, { MouseEventHandler } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { RegularFunction } from "types/common";

type Variant = keyof typeof VARIANTS_MAP;

interface PropTypes {
  isOpen: boolean;
  isLoading: boolean;
  description: string;
  variant: Variant;
  title?: string;
  onClose: RegularFunction;
  onConfirm: MouseEventHandler<HTMLButtonElement>;
}

const VARIANTS_MAP = {
  danger: "red",
  warning: "orange",
  info: "teal",
  success: "green",
} as const;

function ConfirmModal({ isOpen, onClose, title, description, onConfirm, isLoading, variant }: PropTypes) {
  function onModalClose() {
    onClose();
  }

  return (
    <>
      <Modal onClose={onModalClose} size="sm" isOpen={isOpen} colorScheme={VARIANTS_MAP[variant]}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>{description}</ModalBody>

          <ModalFooter>
            <Button onClick={onModalClose} variant="outline" mr={2}>
              Close
            </Button>

            <Button
              onClick={onConfirm}
              isLoading={isLoading}
              colorScheme={VARIANTS_MAP[variant]}
              rightIcon={<ArrowForwardIcon />}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmModal;
