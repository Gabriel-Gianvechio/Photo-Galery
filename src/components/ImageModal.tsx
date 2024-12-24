import React from 'react';
import Image from 'next/image';

interface ImageModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, onClose }) => {
  return (

    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl font-extrabold hover:text-gray-400"
      >
        &times; {/* Símbolo de fechar */}
      </button>
      <Image
        src={selectedImage!}
        alt="Imagem ampliada"
        layout="intrinsic"
        width={1200}
        height={800}
        className="max-w-full max-h-full object-contain"
      />
    </div>
    
  );
};

export default ImageModal;