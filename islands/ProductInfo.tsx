import Icon from "site/components/ui/Icon.tsx";
import Drawer from "site/components/Drawer.tsx";
import { useState } from "preact/hooks";
import Cart, { Product } from "site/components/Cart.tsx";

interface ProductInfoProps {
  name: string
  description: string
  price: string
  skuItems: (string | undefined)[]
  image: string
}

function ProductInfo({ name, description, price, skuItems, image }: ProductInfoProps) {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  function handleAddToCart() {
    setIsCartDrawerOpen(true);
    setCartProducts([...cartProducts, { name, size: selectedItem, price, image }]);
  }

  // deno-lint-ignore no-explicit-any
  const handleSelectChange = (event: any) => {
    console.log(event.target.value);
    setSelectedItem(event.target.value);
  };

  return (
    <div
      id="info"
      class="flex flex-col w-full lg:w-1/3 gap-6 m-2"
    >
      <div>
        <h1>
          <span class="font-medium text-xl capitalize">{name}</span>
        </h1>
        <span class="text-sm text-gray-500">{description}</span>
      </div>
      <span class="text-sm text-gray-500">R$ {price}</span>
      <div id="sku" class="flex flex-col gap-2">
        <label for="size">Tamanho:</label>
        <select
          id="size"
          class="border border-black p-2"
          onChange={handleSelectChange}
        >
          {skuItems?.map(size => {
            return (
              <option value={size}>{size}</option>
            );
          })}
        </select>
      </div>
      <button
        onClick={handleAddToCart}
        class="btn no-animation btn-primary text-black hover:text-white bg-white hover:bg-primary-dark transition-all duration-300"
      >
        Adicionar ao carrinho
      </button>
      <Drawer title="Meu carrinho" isOpen={isCartDrawerOpen} onClose={() => setIsCartDrawerOpen(false)} direction="right">
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </Drawer>
      <div class="flex flex row gap-2">
        <a href="https://api.whatsapp.com/send/?phone=%2B553170707070&text=Olá%2C+estou+no+site+da+PDP+do+Gabs+e+gostaria+de+ajuda&type=phone_number&app_absent=0">
          <Icon id="WhatsApp" size={32} />
        </a>
        <a href="/">
          <Icon id="Pix" size={32} />
        </a>
        <a href="/">
          <Icon id="Discord" size={32} />
        </a>
      </div>
    </div>
  )
}

export default ProductInfo