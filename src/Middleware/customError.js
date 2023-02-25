class customError extends Error {
  constructor(message, errorName) {
    super(message);
    this.name = errorName;
    this.date = new Date();
  }
}

module.exports = customError;
