export default class Ajax {
    _base = 'http://localhost:5000';

    sendRequest = async(url) =>{
       const request =  await fetch(`${this._base}${url}`);
       return request;
    }

    getResource = async() =>{
      return this.sendRequest('/')
    }

}