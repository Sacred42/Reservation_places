export default class Ajax {
    _base = 'http://localhost:3001';

    sendRequest = async(url , method , body) =>{
      const request = await fetch(`${this._base}${url}`, {
        method : method,
        mode: 'cors',
        headers : {'Content-Type': 'application/json' , 'Cache-Control': 'no-cache, no-store, must-revalidate' },
        body : JSON.stringify(body)
      })
      .then((data)=> data.status <= 200 ? data.json(): 
      data.json().then((error)=>Promise.reject(error))
      .then((data)=>data));
      return request;
    }

    checkResource = async() =>{
      return this.sendRequest('/checkData', 'OPTIONS');
    }

    check = async() =>{
      return this.sendRequest('/check' , 'GET');
    }

    getResource = async() =>{
      return this.sendRequest('/', 'GET');
    }

    getResourceToFloor = async(id) =>{
      return this.sendRequest(`/${id}`, 'GET');
    }

    changeResource = async(number , date , activeUser) =>{
      const body ={
        number : number,
        date : date,
        activeUser : activeUser
      }
      return this.sendRequest('/update' , 'PUT', body);

    }

}