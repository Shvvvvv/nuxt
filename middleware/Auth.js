export default function ({route, redirect}) {
    if(route.name === 'login'){
        if(localStorage.getItem('token')){
            return redirect({name: 'dashboard'})
        }
    }else {
        if(!localStorage.getItem('token')){
            return redirect({name: 'login'})
        }
    }
}