import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface LinkList {
  title: string;
  href: string;
}

interface Props {
  href?: string;
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  aboutLinks?: LinkList[]
  socialLinks?: LinkList[]
}

function Footer({
  aboutLinks,
  socialLinks,
  image =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4959/d7aa9290-074f-417c-99c3-5b0587c8c2ee",
  href = "https://deco.cx/",
  text = "Made with",
  alt = "Made with deco.cx",
  height = 20,
  width = 50,
}: Props) {
  return (
    <div class="py-4 lg:px-0 px-6 w-full bg-black flex flex-col lg:flex-row justify-center items-center gap-4">
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
      <div class="flex flex-col">
        {aboutLinks?.map(item => {
          return (
            <a href={item.href} class="text-white hover:text-gray-300">{item.title}</a>
          )
        })}
      </div>
      <div class="flex flex-col">
        {socialLinks?.map(item => {
          return (
            <a href={item.href} class="text-white hover:text-gray-300">{item.title}</a>
          )
        })}
      </div>
    </div>
  );
}

export default Footer;
