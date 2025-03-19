import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import { DUMMY_PRODUCTS } from "../src/dummy-products.js";
import Product from "../src/components/Product.jsx";
import ShoppingCartContextProvider from "../src/store/shopping-cart-context.jsx";

function App() {
  return (
    <ShoppingCartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </ShoppingCartContextProvider>
  );
}

export default App;
