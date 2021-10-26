import { useState } from "react";
export const useDisclousure = (value = false) => {
  const [state, setState] = useState(false);

  const onClose = () => setState(false);
  const onOpen = () => setState(true);
  const onToggle = () => setState(!state);

  return {
    isOpen: state,
    onClose,
    onOpen,
    onToggle,
  };
};
