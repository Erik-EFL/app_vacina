const errorMiddleware = async (err, _req, res, next) => {
  if (err) {
    const error = {
      status: err.status || 500,
      message: err.message || 'Internal Server Error',
    };
    return res.status(error.status).json({ error });
  } else {
    next();
  }
};

module.exports = {
  errorMiddleware,
};
