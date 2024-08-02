import { ImageWidget } from "apps/admin/widgets.ts";
import { LinkList } from "site/sections/Footer.tsx";
import Header from "site/islands/Header.tsx";

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  navLinks?: LinkList[]
}

function Header_section(props: Props) {
  return (
    <Header {...props} />
  );
}

export default Header_section;
