import { useToast as useChakraToast } from "@chakra-ui/toast";

function useToast() {
  const chakraToast = useChakraToast();

  /**
   *
   * @param {Object} params
   * @param {Number} params.duration
   * @param {String} params.title
   * @param {('error' | 'success' | 'info' | 'warning')} params.status
   * @param {(top | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left')} params.position
   *
   * @description - Pass any props of `chakra useToast`
   */
  function toast({ duration = 4000, ...props }) {
    chakraToast({
      duration,
      position: "top-right",
      isClosable: true,

      ...props,
    });
  }

  return { toast };
}

export default useToast;
