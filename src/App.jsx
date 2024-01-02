import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/admin/Login'
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';
import UserBusiness from './components/user/userBusiness'
import Admin from './components/admin/admin'
import Meeting from './components/admin/meeting'
import Services from './components/admin/services'
import AppStoreAdmin from './mobx/AppStoreAdmin'
import AddMeeting from './components/user/addMeeting'
import SetDetails from './components/admin/setDetails'


function App() {
  useEffect(() => {
    AppStoreAdmin.initBusinessData();
    AppStoreAdmin.initalServices();
    AppStoreAdmin.initalMeeting();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {/* לשנות את הניתוב */}
        <Route path={"admin"} element={<Admin />}>
          <Route path={"details"} element={<SetDetails/>}></Route>
          <Route path={"meetings"} element={<Meeting />}></Route>
          <Route path={"services"} element={<Services />}></Route>
        </Route>
        <Route path={"/"} element={<UserBusiness />}></Route>
          <Route path={"makeAppointment"} element={<AddMeeting/>}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
