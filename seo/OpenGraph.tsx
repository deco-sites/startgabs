import { useEffect } from 'preact/hooks';

interface OpenGraphProps {
  name: string;
  image: string;
  description: string;
  url: string;
}

const OpenGraph = ({ name, image, description, url }: OpenGraphProps) => {
  useEffect(() => {
    document.title = name;

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = description;
    document.head.appendChild(metaDescription);

    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = name;
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = description;
    document.head.appendChild(ogDescription);

    const ogImage = document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.content = image;
    document.head.appendChild(ogImage);

    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.content = url;
    document.head.appendChild(ogUrl);

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogImage);
      document.head.removeChild(ogUrl);
    };
  }, []);

  return null;
};

export default OpenGraph;
