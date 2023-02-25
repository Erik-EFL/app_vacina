class customError extends Error {
  constructor(message, errorName) {
    super(message);
    this.name = errorName;
  }
}

module.exports = customError;
