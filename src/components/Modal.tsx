"use client";
import { useEffect, useState } from "react";
import { FaX } from "react-icons/fa6";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 w-full min-h-screen flex items-center justify-center bg-opacity-70 z-10 bg-black ">
      <div className="bg-gradient-to-r from-gray-900 to-zinc-900 p-6 rounded-xl overflow-auto relative z-0">
        <button
          className="absolute top-2 right-1 text-red-600"
          onClick={() => {
            setIsModalOpen(false);
            onClose();
          }}
        >
          <FaX />
        </button>
        <h2 className="text-lg font-bold mb-4 text-center text-white">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
