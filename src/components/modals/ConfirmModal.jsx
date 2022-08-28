import React from "react";
import PropTypes from "prop-types";
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

const VARIANTS_MAP = {
  danger: "red",
  warning: "orange",
  info: "teal",
  success: "green",
};

function ConfirmModal({ isOpen, onClose, title, description, onConfirm, isLoading, variant }) {
  return (
    <>
      <Modal onClose={onClose} size="sm" isOpen={isOpen} colorScheme={VARIANTS_MAP[variant]}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />

          <ModalBody>{description}</ModalBody>

          <ModalFooter>
            <Button onClick={onClose} variant="outline" mr={2}>
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

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  isLoading: PropTypes.bool,
  variant: PropTypes.oneOf(["danger", "warning", "info", "success"]),
};

export default ConfirmModal;
