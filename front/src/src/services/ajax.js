export default class Ajax {
    _base = 'http://localhost:5000';

    getResources = async(url) =>{
       const request =  await fetch(`${this._base}${url}`);
       return request;
    }

    getRooms = async() =>{
      return this.getResources('/');
    }
}