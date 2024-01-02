import { observer } from "mobx-react";
import AppStoreAdmin from "../../mobx/AppStoreAdmin";
import ShowCardDetails from "./showCardDetails";
import SetDetails from "./setDetails";
import { Outlet, Link } from "react-router-dom";
import './adminBusiness.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';

const AdminBusiness = observer(() => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <header className="header-adminBusiness">
                {
                    !AppStoreAdmin.isSet ?
                        <ShowCardDetails /> :
                        <SetDetails />
                }
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}  >
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" >
                                <Tab disabled={AppStoreAdmin.enableButton == true} label="Meeting" value="1" component={Link} to="meetings" style={{color:'green'}}/>
                                <Tab disabled={AppStoreAdmin.enableButton == true} label="Service" value="2" component={Link} to="services" style={{color:'green'}}/>
                            </TabList>
                        </Box>

                    </TabContext>
                </Box>
            </header>
            <Outlet />

        </div>
    )
})
export default AdminBusiness;




