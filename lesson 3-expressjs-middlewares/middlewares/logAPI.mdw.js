const logAPI = (req, res, next) => {
  const currentDate = new Date();
  console.log(`API is coming as ${currentDate}`);
  next();
};

export default logAPI;
