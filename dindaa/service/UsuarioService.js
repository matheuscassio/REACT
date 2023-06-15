import axios from "axios"
class UsuarioService {

        async cadastrar(data){   
            let response ={
                mensagem: "ok"
            } 
            return Promise.resolve(response)



        //return axios({
        //    url: "http://192.168.1.68:localhost:3000/cadastrar",
        //    method: "POST",
        //    timeout: 5000,
        //    data: data,
        //    headers:{
        //        Accept: 'application/json'
        //    }
        //}).then((response)=> {
        //    return Promise.resolve(response)
        //}).catch((error) => {
        //    return Promise.reject(error)
        //})
    }
}
const usuarioService = new UsuarioService()
export default usuarioService