class ErrorDB {
    constructor(error) {
        this.error = error;
        this.createError(this.error);
    }
  createError(err){
      console.log(err.originalError.info.number)
      if(err.originalError.info.number === 2627){
          throw new Error('Cannot duplicate');
      }
      else if(err.originalError.info.number === 295){
          throw new Error('bad format date!')
      }
  }
}

module.exports = {ErrorDB : ErrorDB}