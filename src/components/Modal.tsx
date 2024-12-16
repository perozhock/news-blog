import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="bg-white flex flex-col justify-center items-center min-w-32 min-h-20 max-w-xl m-6 rounded-lg p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-20 right-20 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
