import React, { ReactNode } from "react";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";

import { RegularFunction } from "types/common";

interface PropTypes {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  onClose: RegularFunction;
}

function CommonModal({ isOpen, onClose, children, title }: PropTypes) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CommonModal;
