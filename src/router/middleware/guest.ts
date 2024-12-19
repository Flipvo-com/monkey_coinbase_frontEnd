import {loginState} from '@/stats/loginState';
import type {MiddlewareContext} from '@/router';

/**
* Middleware for guest
* @param {MiddlewareContext} context
*/
export default async function guest({to, from, next, router, params}: MiddlewareContext) {
  // Your middleware code here
  const {isLogin, userLogin} = loginState();
    if (isLogin.value && userLogin.value) {
        await router.push({name: 'dashboard'});
        return false;
    } else {
      // send to home page
      await router.push({name: 'home'});
    }
  await next();
};
