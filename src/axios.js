import axios from "axios";


const instance=axios.create({
    baseURL:"https://mighty-tundra-45227.herokuapp.com",
})
export default instance;