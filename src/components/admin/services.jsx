import { observer } from "mobx-react";
import AppStoreAdmin from "../../mobx/AppStoreAdmin";
import AddService from "./addService"
import ServiceShow from "./serviceShow"
import './services.css'
import * as React from 'react';


const Services = observer(() => {

    return (
        <div>
            {console.log("ServicesArray", AppStoreAdmin.listServices)}
            <div className="services">
                {AppStoreAdmin.listServices?.map(index => <ServiceShow props={index} key={index.id} />)}
            </div>
            <AddService></AddService>
        </div>
    )
})
export default Services;