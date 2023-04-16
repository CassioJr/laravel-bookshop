import Cookies from "js-cookie";
export default{
     auth(to: any, from: any, next: any){
       const token = Cookies.get('__application_token');

       if(!token){
           next('/login');
       }

       next();
    }
}
