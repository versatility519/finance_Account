import { useRoutes } from "react-router";
import MainRoutes from "./MainRoutes";
// import AdminRoute from "./AdminRoute";


export default function Routes() {
    return useRoutes([MainRoutes])
}