import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";
import Icon from "site/components/ui/Icon.tsx";
import { LinkList } from "site/sections/Footer.tsx";
import Drawer from "site/components/Drawer.tsx";
import Cart from "site/components/Cart.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  navLinks?: LinkList[]
}

function Header({
  image =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  text = "Made with",
  alt = "Made with deco.cx",
  height = 20,
  width = 50,
  navLinks,
}: Props) {
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = scrollY;
    if (currentScrollY > lastScrollY) {
      // Scroll down
      setIsVisible(false);
    } else {
      // Scroll up
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    addEventListener('scroll', handleScroll);
    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const header = document.getElementById('header');
    let prevScrollpos = globalThis.scrollY;

    globalThis.onscroll = function () {
      const currentScrollPos = globalThis.scrollY;

      if (prevScrollpos > currentScrollPos) {
        // Rolando para cima
        header?.classList.remove('header-hidden');
      } else {
        // Rolando para baixo
        header?.classList.add('header-hidden');
      }
      prevScrollpos = currentScrollPos;
    }
  }, [])

  function renderNavLinks() {
    return (
      <nav id="nav-menu" class={`flex items-center ${isMenuDrawerOpen ? "block" : "hidden lg:block"}`}>
        <ul class={`flex ${isMenuDrawerOpen ? "flex-col" : "flex-row"} gap-3 align-center h-fit`}>
          {navLinks?.map(item => {
            return (
              <li class="h-fit hover:text-gray-300"><a href={item.href}>{item.title}</a></li>
            )
          })}
        </ul>
      </nav>
    )
  }


  return (
    <header
      id="header"
      class={`bg-white min-h-12 p-4 border-b border-b-black flex flex-row items-center 
      justify-between fixed top-0 left-0 w-full z-10 shadow-md transition-all
      duration-300 transition-transform duration-300 ease-in-out
      ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
    >
      <div class="h-4 relative">
        <button type="button" class="lg:hidden" onClick={() => setIsMenuDrawerOpen(true)}>
          <Icon id="FilterList" size={20} />
        </button>
        <Drawer title="Menu" isOpen={isMenuDrawerOpen} onClose={() => setIsMenuDrawerOpen(false)} direction="left">
          {renderNavLinks()}
        </Drawer>
        {renderNavLinks()}
      </div>
      <a
        href={href}
        class="flex flex-row gap-1 items-center justify-center text-xs"
        target="_blank"
      >
        {text && <p>{text}</p>}
        {image && (
          <Image
            src={image || ""}
            alt={alt || ""}
            height={height || 20}
            width={width || 50}
          />
        )}
      </a>
      <div
        class="flex flex-row gap-1 items-center justify-center text-xs"
      >
        <button type="button">
          <Icon id="User" size={20} />
        </button>
        <button type="button">
          <Icon id="MagnifyingGlass" size={20} />
        </button>
        <div>
          <button type="button" onClick={() => setIsCartDrawerOpen(true)}>
            <Icon id="ShoppingCart" size={20} />
          </button>
          <Drawer title="Meu carrinho" isOpen={isCartDrawerOpen} onClose={() => setIsCartDrawerOpen(false)} direction="right">
            <Cart />
          </Drawer>
        </div>
      </div>
    </header>
  );
}

export default Header;
