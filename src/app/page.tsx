"use client";
import React, { useState } from 'react';
import ImageGrid from '@/components/ImageGrid';

const Page: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <ImageGrid 
      selectedImage={selectedImage} 
      setSelectedImage={setSelectedImage} 
    />
  );
};

export default Page;