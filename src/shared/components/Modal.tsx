import { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  onClose: () => void;
};

export default function Modal({
  isOpen,
  title,
  description,
  onClose,
}: ModalProps) {
  //below code to make modal accessible
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      lastFocusedElement.current = document.activeElement as HTMLElement;
      // Move focus to the close button
      closeButtonRef.current?.focus();
    } else {
      // Restore focus to previous element
      lastFocusedElement.current?.focus();
    }
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent z-10">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative  border border-black">
            <button
              onClick={() => onClose()}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <div className="mt-6 text-right">
              <button
                ref={closeButtonRef}
                onClick={() => onClose()}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:border-black"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
