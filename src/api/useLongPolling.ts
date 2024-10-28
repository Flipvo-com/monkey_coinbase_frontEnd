import {useApi} from "./useApi";

export function useLongPolling() {


    return useApi(
        "/longPolling",
        {
            method: "POST",
        }, {
            immediate: false,
        })
}
/**
 * when the "execute" is triggered in the component
 * you can listen to the "onResultSuccess" from  all components
 * @constructor
 */

const {
    execute: executeGlobalLongPolling,
    onResultSuccess:  onResultSuccessGlobalLongPolling,
} = useLongPolling()

export {
    executeGlobalLongPolling,
    onResultSuccessGlobalLongPolling,
}
