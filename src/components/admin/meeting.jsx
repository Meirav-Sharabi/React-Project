import { observer } from "mobx-react";
import AppStoreAdmin from "../../mobx/AppStoreAdmin";
import AppointmentShow from "./appointmentShow";
import { useEffect } from 'react'; 
import './meeting.css'
const Meeting = observer(() => {
  useEffect(() => {
    AppStoreAdmin.initalMeeting()
  }, [])
  function getWeekBeforDate(date) {
    const myDate = new Date(date);
    return new Date(
        myDate.getFullYear(),
        myDate.getMonth(),
        myDate.getDate() - 7,
    );
}
    return (
        <div>
          <div className="meetings">
          {[...AppStoreAdmin.listMeeting].map(index=><AppointmentShow props={index} color={new Date(index.dateTime) - 24 <= new Date() ? "red" : getWeekBeforDate(index.dateTime) <= new Date() ? "orange" : "green"}  key={index.id}/>)}
          </div>
        </div>
    )
})
export default Meeting;