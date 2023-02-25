const errorMiddleware = async (err, _req, res, next) => {
  const { status, message } = err;

  res.status(status).send({ message });

  next();
};

module.exports = errorMiddleware;
