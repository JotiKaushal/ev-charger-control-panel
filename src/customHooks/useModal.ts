import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const onClose = () => {
    setIsModalOpen((prev) => !prev);
  };

  return {
    isModalOpen,
    onClose,
  };
};
