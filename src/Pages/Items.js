import { CartProvider, useCart } from "react-use-cart";

function Items() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      name: "Marina",
      price: 200,
      quantity: 1
    },
    {
      id: 2,
      name: "History",
      price: 10,
      quantity: 1
    },
    {
      id: 3,
      name: "Zoo",
      price: 50,
      quantity: 1
    },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Items;