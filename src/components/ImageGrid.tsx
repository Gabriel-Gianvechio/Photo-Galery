import React from 'react';
import { images } from '../data/imageData'; // Importamos os dados das imagens
import ImageItem from './ImageItem'; // Importando o componente ImageItem
import ImageModal from './ImageModal'; // Importando o componente ImageModal

interface ImageGridProps {
  selectedImage: string | null;
  setSelectedImage: (imgSrc: string | null) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ selectedImage, setSelectedImage }) => {

  const handleImageClick = (imgSrc: string) => {
    setSelectedImage(imgSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className='mb-5 text-xl'>
        Photo Galery for Study React, Tailwind, Typescript - developed by 
        <a href="https://github.com/Gabriel-Gianvechio"
          className='text-yellow-200'
        > Deviel</a> 
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {images.map((imgSrc, index) => (
          <ImageItem 
            key={index} 
            imgSrc={imgSrc.url} 
            index={index} 
            onClick={handleImageClick} 
          />
        ))}
      </div>

      {/* Exibindo o modal caso uma imagem esteja selecionada */}
      {selectedImage && (
        <ImageModal 
          selectedImage={selectedImage} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default ImageGrid;