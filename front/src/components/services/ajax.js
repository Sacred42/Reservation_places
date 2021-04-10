export default class Ajax {
    _base = 'http://localhost:5000';
    
    sendRequest = async(url , method , body) =>{
      const request = await fetch(`${this._base}${url}`, {
        method : method,
        mode: 'cors',
        headers : {'Content-Type': 'application/json' },
        body : JSON.stringify(body)
      })
      return request
    }

    getResource = async() =>{
      return this.sendRequest('/', 'GET');
    }

    changeResource = async(number , data) =>{
      const body ={
        number : number,
        data : data
      }
      return this.sendRequest('/update' , 'PUT', body);
    }

}