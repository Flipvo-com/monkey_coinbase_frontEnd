import {loginState} from '@/stats/loginState';
import type {MiddlewareContext} from '@/router';

export default async function auth({to, from, next, router, params}: MiddlewareContext) {
    const {isLogin, userLogin} = loginState();

    if (!isLogin || !userLogin.value) {
        isLogin.value = false;
        userLogin.value = null;
        await router.push({name: 'login'});
        console.log('You are not logged in')
        return false
    }

    if (params!.length>0 && !params!.includes(userLogin.value.accountType)) {
        console.log('You are not allowed to access this page' , params);
        return Promise.reject(false)
    }

    // console.log('You are allowed to access this page')
    // console.log('--------')
    // Continue to the next middleware or route
    return next();
}
