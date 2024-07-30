interface ListItem {
  "@type": string;
  name: string;
  item: string;
  position: number;
}

interface BreadcrumbProps {
  items: ListItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  if (items.length > 0 && items[0].name !== 'Home') {
    items.unshift({
      "@type": "ListItem",
      name: "Home",
      item: "/",
      position: 0
    });

    items.forEach((item, index) => {
      item.position = index + 1;
    });
  }

  return (
    <nav aria-label="breadcrumb" className="ml-2">
      <ol className="flex space-x-1">
        {items.map((item, index) => (
          <div class="flex" key={item.position}>
            <li className="flex items-center">
              <a href={item.item} className="text-black hover:text-gray-600 hover:underline transition-all duration-300">
                {item.name}
              </a>
            </li>
            {index < items.length - 1 && (
              <li className="flex items-center mx-2 text-gray-500">{'>'}</li>
            )}
          </div>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
