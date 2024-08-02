import jsonData from "site/polo.json" with { type: "json" };
import Breadcrumb from "site/components/Breadcrumb.tsx";
import OpenGraph from "site/seo/OpenGraph.tsx";
import StructuredDataProduct from "site/seo/StructuredDataProduct.tsx";
import ProductInfo from "site/islands/ProductInfo.tsx";


export default function Section() {
  const { product, breadcrumbList, seo } = jsonData
  const imageUrls = product.isVariantOf.hasVariant.map(item => item.image[0].url)
  const name = breadcrumbList.itemListElement[breadcrumbList.itemListElement.length - 1].name;
  const price = `${product.isVariantOf.hasVariant[0].offers.lowPrice}`;
  const description = product.description;
  const skuItems = product.isVariantOf.hasVariant.map(item => item.additionalProperty.find(prop => prop.name === "TAMANHO")?.value)

  return (
    <div
      id="it-works"
      class="flex flex-col py-20 px-6 w-full items-center justify-center gap-4 mx-auto container"
    >
      <OpenGraph name={seo.title} description={seo.description} url={seo.canonical} image={imageUrls[0]} />
      <StructuredDataProduct name={product.name} image={imageUrls[0]} description={product.description} brand={product.brand} />
      <div id="breadcrumb" class="w-full">
        <Breadcrumb items={breadcrumbList.itemListElement} />
      </div>
      <div id="product" class="w-full flex flex-col lg:flex-row">
        <div
          id="gallery"
          class="flex lg:flex-wrap lg:justify-center items-center overflow-x-scroll w-full lg:w-2/3">
          {imageUrls?.map(image => {
            return (
              <img
                src={image}
                alt="Product"
                class="object-cover w-half min-w-96 aspect-2/3 border-solid border border-black m-2"
              />
            );
          })}
        </div>
        <ProductInfo name={name} description={description} price={price} skuItems={skuItems} image={imageUrls[0]} />
      </div>
    </div>
  );
}
