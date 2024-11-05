import {toast} from "vue3-toastify";
import {attemptAccess} from "@/plugins/middlewares/core/accessRouteChack";
import router from '@/router';
import type {_RouteRecordBase, RouteLocationNormalized} from "vue-router";
import {toastController} from "@ionic/vue";
export interface GenderType {
    male: "male";
    female: "female";
}

export const toCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value)
}
export const toastFromResponse = (response: any) => {
    if (response.data && response.data._t) {

        toast(response.data.message, {
            type: response.data._t,
            position: 'top-right',
            transition: "flip",
            dangerouslyHTMLString: true
        })
    } else {
        return "An error occurred"
    }
}
export const  findRouteByName = (routes: _RouteRecordBase[]
                                 , name: string): _RouteRecordBase | null => {
    for (const route of routes) {
        if (route.name === name) {
            return route;
        }
        if (route.children) {
            const childRoute = findRouteByName(route.children, name);
            if (childRoute) {
                return childRoute;
            }
        }
    }
    return null;
}
export const  canGoTo = async (route: { name: string })=> {
    try {
        const r = findRouteByName(router.getRoutes(), route.name) as RouteLocationNormalized;
        // console.log(`Checking access for route: ${route.name}`);
        const result = await attemptAccess(r).then(r=>r).catch(e=>e)
        // console.log('attemptAccess succeeded:', result);
        return result;
    } catch (error) {
        // console.error('attemptAccess failed:', error);
        return false;
    }
}
export const isRole = (roles: string | string[]): boolean =>{
    const allowedRoles = Array.isArray(roles) ? roles : [roles];
    // replace 'admin' with the 'web' in allowedRoles
    allowedRoles[allowedRoles.indexOf('admin')] = 'web';

    const user = JSON.parse(<string>localStorage.getItem('userLogin'));

    // Return false if no user is logged in
    if (!user || !user.accountType) {
        return false;
    }

    // Check if the user's role is in the allowedRoles array
    return allowedRoles.includes(user.accountType);
}

interface  presentToastConfigType  {
    position?: 'top' | 'middle' | 'bottom' ;
    message?: string ;
    duration?: number;
    icon?:any;

}
export  const presentToast = async (con:presentToastConfigType)=> {
    const toast = await toastController.create({
        message: con.message,
        duration:  con.duration || 2000,
        position: con.position,
        icon:con.icon
    });

    await toast.present();
}

export const getFromRoute = (route: { name: string; subject?: keyof RouteLocationNormalized }) => {
    const r = findRouteByName(router.getRoutes(), route.name) as RouteLocationNormalized;
    route.subject = route.subject || 'path';
    console.log(router.getRoutes() , route.name)
    // Use type assertion for the subject property
    return r[route.subject as keyof RouteLocationNormalized] as string;
};