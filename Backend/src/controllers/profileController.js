export const getProfile = async (req, res) => {
  return res.status(200).json({
    message: "You are authenticated!",
  });
};
