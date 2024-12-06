import Dashboard from "@/pages/dashboard"
import Invoice from "@/pages/invoice"
import Shipping from "@/pages/shipping"
import Sales from "@/pages/sales"
import Clients from "@/pages/clients"
import Bills from "@/pages/bills"
import Journal from "@/pages/journal"
import T_Account from "@/pages/tAccount"
import Trial_Balance from "@/pages/trialBalance"
import Financial_Statement from "@/pages/financialStatement"
import Inventory from "@/pages/inventory"
import Requisitions from "@/pages/requisitions"
 
const MainRoutes = {
    path: "/",
    children: [
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "/invoice",
            element: <Invoice />
        },
        {
            path: "/shipping",
            element: <Shipping />
        },
        {
            path: "/sales",
            element: <Sales />
        },
        {
            path: "/clients",
            element: <Clients />
        },
        {
            path: "/bills",
            element: <Bills />
        },
        {
            path: "/journal",
            element: <Journal />
        },
        {
            path: "/t-account",
            element: <T_Account />
        },
        {
            path: "/trial-balance",
            element: <Trial_Balance />
        },
        {
            path: "/financial-statement",
            element: <Financial_Statement />
        },
        {
            path: "/inventory",
            element: <Inventory />
        },
        {
            path: "/requisitions",
            element: <Requisitions />
        },
    ],
}

export default MainRoutes;