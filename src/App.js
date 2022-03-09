// Imports
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Import components
import BottomNav from "./Components/navigation/BottomNav";
import TopNav from "./Components/navigation/TopNav";
import ProductDetails from "./Components/productDetails/ProductDetails";
import GadgetsPage from "./pages/GadgetsPage";
import Cart from "./Components/cart/Cart";
// Import pages
import HomePage from "./pages/HomePage";
import JewelleryPage from "./pages/JewelleryPage";
import MensPage from "./pages/MensPage";
import ShopPage from "./pages/ShopPage";
import WomensPage from "./pages/WomensPage";
// Import store
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <div>
      <BrowserRouter>
        <TopNav />
        <BottomNav/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/product/:productId" component={ProductDetails} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/mens" component={MensPage} />
            <Route exact path="/womens" component={WomensPage} />
            <Route exact path="/gadgets" component={GadgetsPage} />
            <Route exact path="/jewelleries" component={JewelleryPage} />
            <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
