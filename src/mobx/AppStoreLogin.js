import {observable,makeObservable,action} from 'mobx';
class AppStoreLogin
{
    isLogin=false;
    constructor(){
        makeObservable(this,{
            isLogin:observable,
            setIsLogin:action,
        })
    }

    setIsLogin=(val)=>{
        this.isLogin=val;
    }    
}
export default new AppStoreLogin();
