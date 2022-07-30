import Home from "./pages/Home.svelte";
import Details from "./pages/Details.svelte";
import Login from "./pages/Login.svelte";
import Cart from "./pages/Cart.svelte";
import Listing from "./pages/Listing.svelte";

export const routes = {
  "/": Home,
  "/details/:id": Details,
  "/login": Login,
  "/cart": Cart,
  "/listing": Listing,
};
