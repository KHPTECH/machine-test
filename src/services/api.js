import axios from 'axios';
export const getData = ({ url = ""}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const resp = await axios.get(`${url}`)         
            resolve(resp)
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
    // http.get('')
}