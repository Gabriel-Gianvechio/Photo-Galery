import React from 'react';
import Image from 'next/image';

interface ImageItemProps {
  imgSrc: string;
  index: number;
  onClick: (imgSrc: string) => void;
}

const ImageItem: React.FC<ImageItemProps> = ({ imgSrc, index, onClick }) => {
  return (
    <div
      className="relative w-64 h-44 group overflow-hidden border border-gray-200"
      onClick={() => onClick(imgSrc)}
    >
      <Image
        src={imgSrc}
        alt={`Image ${index + 1}`}
        layout="fill"
        objectFit="cover"
        //className com efeitos de zoom e leve opacidade
        className="transition-transform duration-300 
        ease-in-out group-hover:scale-105 group-hover:brightness-75"
      />
      
      <div // div para inserir uma OVERLAY, escurecendo levemente a imagem
        className="absolute inset-0 bg-black bg-opacity-0 
        group-hover:bg-opacity-50 transition-all duration-300 ease-in-out">        
      </div>      
    </div>
  );
};

export default ImageItem;