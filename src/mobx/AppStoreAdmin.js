import { observable, makeObservable, action } from 'mobx';
import Swal from 'sweetalert2'
class AppStoreAdmin {
    isSet = false;
    enableButton = false;
    isNewService = false;
    isAdmin = false;
    business = {
        name: "",
        address: "",
        phone: "",
        owner: "",
        logo: "",
        description: "",
    };
    listServices = [];
    listMeeting = [];
    baseURL = 'http://localhost:8787'
    constructor() {
        makeObservable(this, {
            isNewService: observable,
            business: observable,
            isSet: observable,
            listServices: observable,
            listMeeting: observable,
            enableButton: observable,
            isAdmin: observable,
            setIsSet: action,
            updateBusiness: action,
            setEnableButton: action,
            setIsNewService: action,
            setIsAdmin: action,
        })
    }


    setIsSet = (val) => {
        this.isSet = val;
    }

    setEnableButton = (val) => {
        this.enableButton = val;
    }

    setIsNewService = (val) => {
        this.isNewService = val;
    }

    setIsAdmin = (val) => {
        this.isAdmin = val;
    }


    //Global State Business

    initBusinessData = async () => {

        const responseData = await fetch("http://localhost:8787/businessData")
        const data = await responseData.json()
        this.business = data;
    }

    updateBusiness = async ({ id, name, address, phone, owner, logo, description }) => {
        const response = await fetch("http://localhost:8787/businessData", {
            method: "POST",
            body: JSON.stringify({ name, address, phone, owner, logo, description }),
            headers: { 'Content-Type': 'application/json' },
        })

        this.business = { id, name, address, phone, owner, logo, description }
    }



    //Global State Meeting

    initalMeeting = async () => {
        const response = await fetch(`${this.baseURL}/appointments`);
        const data = await response.json();
        this.listMeeting = data;
        this.listMeeting.sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime));
    }

    async addMeeting(data) {

        await fetch('http://localhost:8787/appointment', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            console.log(res.status);
            if (res.status == 200) {
                this.listMeeting.push(data);
                Swal.fire({
                    title: "The appointment was successfully set",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
            else {
                Swal.fire({
                    title: "The date is taken, set a new date",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }).catch((e) => { console.log(e.status); })
    }

    //Global State Services
   
    initalServices = async () => {
        const response = await fetch(`${this.baseURL}/services`);
        const data = await response.json();
        this.listServices = await data;
    }
   
   
    addService = async (data) => {
        await fetch("http://localhost:8787/service", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json', }

        }).then((res) => {

            if (res.status == 200) {
                this.listServices.push(data)
            }
            console.log(res)
        }).catch((res) => {
            console.log("cetch 400");
        })
    }

}
export default new AppStoreAdmin();






