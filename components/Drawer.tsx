import { isDrawerOpen } from "site/sections/Header.tsx";

interface DrawerProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
}

const Drawer: React.FC<DrawerProps> = ({ children, direction = 'right' }) => {
  const translateClass = direction === 'right' ? 'translate-x-full' : '-translate-x-full';
  const openClass = 'translate-x-0';

  return (
    <div className={`fixed inset-0 z-50 ${isDrawerOpen.value ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={() => isDrawerOpen.value}></div>
      <div className={`fixed top-0 ${direction === 'right' ? 'right-0' : 'left-0'} w-80 h-full bg-white shadow-lg transform ${isDrawerOpen.value ? openClass : translateClass} transition-transform duration-300 ease-in-out`}>
        <button onClick={() => isDrawerOpen.value} className="p-4 text-gray-700 hover:text-gray-900">
          Close
        </button>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
