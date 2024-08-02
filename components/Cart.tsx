interface CartProps {
  cartProducts: Product[];
  setCartProducts: React.SetStateAction<Product[]>;
}

export interface Product {
  name: string;
  size: string;
  price: string;
  image: string;
}

const Cart: React.FC<CartProps> = ({ cartProducts = [] }) => {
  return (
    <div id="cart-container" className="flex flex-col justify-between h-full-header">
      <div>
        {cartProducts.map((product) => {
          return (
            <div className="flex flex-row gap-2 m-2 ">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 aspect-2/3 object-cover"
              />
              <div className="flex flex-col justify-center">
                <p class="mb-2">{product.name}</p>
                <p class="text-sm">{product.size}</p>
                <p class="text-sm">R$ {product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div class="border-t border-solid border-black w-full p-2">
        <div class="flex w-full justify-between">
          <span class="text-lg text-gray-500">Total</span>
          <span class="text-xl">R$ {cartProducts.reduce((acc, curr) => acc + parseFloat(curr.price), 0).toFixed(2)}</span>
        </div>
        <button className="mt-3 btn hover:bg-gray-300 btn-primary w-full hover:text-black">Finalizar compra</button>
      </div>
    </div>
  );
};

export default Cart;
