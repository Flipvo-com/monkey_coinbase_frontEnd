import {useApi} from "./useApi";

export function useAccountOrder() {
    const useGetAccountOrders = () => {
        return useApi(
            "/getAccountOrders",
            {
                method: "POST",
            }, {
                immediate: false,
            })
    }

    return {
        useGetAccountOrders,
    }
}
/**
 * the use of the globalUseGetOrders
 * is when the "execute" is triggered in the component
 * you can listen to the "onResultSuccess" from  all component
 * @constructor
 */
const {useGetAccountOrders} = useAccountOrder();
const {
    execute: executeGlobalGetAccountOrders,
    onResultSuccess: onResultSuccessGlobalGetAccountOrders,
} = useGetAccountOrders()

export {
    executeGlobalGetAccountOrders,
    onResultSuccessGlobalGetAccountOrders,
}
