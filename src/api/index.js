import axios from 'axios'


export function fetchItem(id) {
    return axios.get(`/api/v4/tagmgr/get_list/0`).then((res) => {
        return { title: '1'}
        // return { result: res.data.result }
    })
}


export function fetchList() {
    // return axios.get(`http://localhost:10300/api/v4/tagmgr/get_list/0`).then((res) => {
    //     return res.data.result
    // })
    return axios.get(`http://localhost:10300/test`).then((res) => {
        return res.data.result
    })
}

