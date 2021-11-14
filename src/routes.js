import HomePage from "./Pages/HomePage"
import CartPage from "./Pages/CartPage";
const routes=[
    {path:"/" , component:HomePage ,exact:true},
    {path:"/cart" , component:CartPage},
]

export default routes;