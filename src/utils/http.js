import axios from 'axios'

export default ({method,url}) => {
    return axios({
        method,
        url
    }).then( res => res.data)
        .catch( err => err)
}