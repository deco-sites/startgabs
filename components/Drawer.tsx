import Icon from "site/components/ui/Icon.tsx";

interface DrawerProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  direction?: 'left' | 'right';
}

const Drawer: React.FC<DrawerProps> = ({ title, isOpen, onClose, children, direction = 'right' }) => {
  const translateClass = direction === 'right' ? 'translate-x-full' : '-translate-x-full';
  const openClass = 'translate-x-0';

  return (
    <div id="drawer-container" className={`fixed inset-0 z-50 h-dvh ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50 h-full+header" onClick={onClose}></div>
      <div className={`fixed top-0  h-full+header ${direction === 'right' ? 'right-0' : 'left-0'} w-80 h-full bg-white shadow-lg transform ${isOpen ? openClass : translateClass} transition-transform duration-300 ease-in-out`}>
        <div class="flex justify-between w-full">
          <span class="p-3 font-medium text-2xl">{title}</span>
          <button onClick={onClose} className="p-4 text-gray-700 hover:text-gray-900">
            <Icon id="XMark" size={20} />
          </button>
        </div>
        <div className="border-t border-solid border-black h-full-header">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
