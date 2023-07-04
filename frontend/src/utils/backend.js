import 'axios';
import axios from 'axios';

const backendUrl = "http://192.168.68.173:4000/";

function getTodos() {
    let data = [];
    axios.get(backendUrl).then(res => {
        data = res.data;
        return data;
    }).catch(err => {
        data = [{"title": "Error occurred in connection to backend."}]
        console.log('catch logged')
        return data;
    });
}
    
export {getTodos};