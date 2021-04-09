export default class Ajax {
    _base = 'http://localhost:5000';

    sendRequestGet = async(url) =>{
       const request =  await fetch(`${this._base}${url}`);
       return request;
    }

    sendRequestPost = async(url , body) =>{
      console.log(body);
      const request = await fetch(`${this._base}${url}`, {
        method : 'PUT',
        mode: 'cors',
        headers : {'Content-Type': 'application/json' },
        body : JSON.stringify(body)
      })
      return request
    }

    getResource = async() =>{
      return this.sendRequestGet('/');
    }

    changeResource = async(number , data) =>{
      const body ={
        number : number,
        data : data
      }
      return this.sendRequestPost('/update' , body);
    }

}