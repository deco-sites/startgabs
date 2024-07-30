import Icon from "site/components/ui/Icon.tsx";
import jsonData from "site/polo.json" with { type: "json" };
import Breadcrumb from "site/components/Breadcrumb.tsx";

export default function Section() {
  const { product, breadcrumbList } = jsonData
  const urls = product.isVariantOf.hasVariant.map(item => item.image[0].url)
  const name = breadcrumbList.itemListElement[breadcrumbList.itemListElement.length - 1].name;
  const price = `R$${product.isVariantOf.hasVariant[0].offers.lowPrice}`;
  const description = product.description;
  const skuItems = product.isVariantOf.hasVariant.map(item => item.additionalProperty.find(prop => prop.name === "TAMANHO")?.value)

  return (
    <div
      id="it-works"
      class="flex flex-col py-20 px-6 w-full items-center justify-center gap-16 mx-auto container"
    >
      <div id="breadcrumb" class="w-full">
        <Breadcrumb items={breadcrumbList.itemListElement} />
      </div>
      <div id="product" class="w-full flex flex-col lg:flex-row">
        <div
          id="gallery"
          class="flex lg:flex-wrap lg:justify-center items-center overflow-x-scroll w-full lg:w-2/3">
          {urls?.map(image => {
            return (
              <img
                src={image}
                alt="Product"
                class="object-cover w-half min-w-96 aspect-2/3 border-solid border border-black m-2"
              />
            );
          })}
        </div>
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
          <span class="text-sm text-gray-500">{price}</span>
          <div id="sku" class="flex flex-col gap-2">
            <label for="size">Tamanho:</label>
            <select id="size" class="border border-black p-2">
              {skuItems?.map(size => {
                return (
                  <option value={size}>{size}</option>
                );
              })}
            </select>
          </div>
          <button
            onClick={() => console.log("Carrinho adicionado")}
            class="btn no-animation btn-primary text-black hover:text-white bg-white hover:bg-primary-dark transition-all duration-300"
          >
            Adicionar ao carrinho
          </button>
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
      </div>
    </div>
  );
}
