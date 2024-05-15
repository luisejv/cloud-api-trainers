import Trainer from "../models/Trainer.js";

async function index(req, res) {
  try {
    console.log("💻 [GET] request: ", req.rawHeaders[1]);
    const trainers = await Trainer.find();
    return res.status(200).json({
      status: 200,
      data: trainers,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: e,
    });
  }
}

export default {
  index,
};
