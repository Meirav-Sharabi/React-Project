import { observer } from "mobx-react";
import Login from "./Login";
import AppStoreLogin from "../../mobx/AppStoreLogin";
import AdminBusiness from "./adminBusiness";
import { Outlet } from "react-router-dom";
const Admin= observer(()=>{
    return(
        <>
        {
            !AppStoreLogin.isLogin?
            <Login/>:
            <AdminBusiness/>
        }
        </>
    )
})
export default Admin