import axios from 'axios'

let instance=axios.create({
    baseURL:`${process.env.REACT_APP_BASE_URL}`,
    // headers:{
    //     'Authorization':process.env.REACT_APP_BASE_API
    // }
})
instance.defaults.headers.common['Authorization']=process.env.REACT_APP_BASE_API

export default instance