import {$authHost, $host} from "./index";

export const fetchOneLot = async (userId) => {
    const { data } = await $authHost.get('api/lot/' + userId)
    //console.log(data)
    return data
}
export const fetchLots = async () => {
    const {data} = await $authHost.get('api/lot')
    console.log(data)
    return data
}

