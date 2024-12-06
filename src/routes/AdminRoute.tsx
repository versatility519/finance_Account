// import AddEvent from "../pages/admin/addEvent";
// import Admin from "../pages/admin/admin";
 

const AdminRoute = {
    path: "/",
    children: [
        {
            path: "/admin",
            // element: <Admin />
        },
        {
            path: "/admin/addevent",
            // element: <AddEvent />
        },
     
    ]
}

export default AdminRoute;