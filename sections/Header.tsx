import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";
import Icon from "site/components/ui/Icon.tsx";
import { LinkList } from "site/sections/Footer.tsx";
import Drawer from "site/components/Drawer.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  navLinks?: LinkList[]
}

export const isDrawerOpen = signal(false);

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


  return (
    <header
      id="header"
      class="bg-white min-h-12 p-4 border-b border-b-black flex flex-row items-center justify-between fixed top-0 left-0 w-full z-10 shadow-md transition-all duration-300">
      <div class="h-4 relative">
        <button type="button" class="lg:hidden" onClick={() => { isDrawerOpen.value = true; console.log("click") }}>
          <Icon id="FilterList" size={20} />
        </button>
        <Drawer direction="left">
          <h2 className="text-lg font-bold mb-4">Drawer Content</h2>
          <p>This is the content inside the drawer.</p>
        </Drawer>
        <nav class="flex items-center hidden lg:block" id="nav-menu">
          <ul class="flex flex-row  gap-3 align-center h-fit">
            {navLinks?.map(item => {
              return (
                <li class="h-fit hover:text-gray-300"><a href={item.href}>{item.title}</a></li>
              )
            })}
          </ul>
        </nav>
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
        <button type="button">
          <Icon id="ShoppingCart" size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;
