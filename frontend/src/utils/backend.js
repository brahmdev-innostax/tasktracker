import "axios";
import axios from "axios";

const backendUrl = "http://192.168.68.173:4500/";

async function getTodos() {
  let data = [];
  // axios.get(backendUrl).then(res => {
  //     data = res.data;
  //     return data;
  // }).catch(err => {
  //     data = [{"title": "Error occurred in connection to backend."}]
  //     console.log('catch logged')
  //     return data;
  // });
  try {
    const resposne = await fetch(backendUrl);
    console.log(await resposne.json());
  } catch (error) {
    console.log(error);
  }
}

export { getTodos };
