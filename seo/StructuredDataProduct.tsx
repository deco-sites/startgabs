import { useEffect } from 'preact/hooks';

interface StructuredDataProductProps {
  name: string;
  image: string;
  description: string;
  brand: {
    "@type": string,
    "@id": string,
    name: string,
  };
}

const StructuredDataProduct = ({ name, image, description, brand }: StructuredDataProductProps) => {
  useEffect(() => {
    const structuredData = {
      "@context": "http://schema.org",
      "@type": "Product",
      "name": name,
      "image": image,
      "description": description,
      "brand": brand,
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default StructuredDataProduct;
