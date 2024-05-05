module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next))
    .catch((error) => {
      console.error("Error caught in wrapper:", error);
      next(error);
    });
};
