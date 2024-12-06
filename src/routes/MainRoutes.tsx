import Dashboard from "@/pages/dashboard";
import Shipping from "@/pages/shipping";
 
const MainRoutes = {
    path: "/",
    children: [
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "/shipping",
            element: <Shipping />
        },
    ],
}

export default MainRoutes;