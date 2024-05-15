import config from "../config.js";
import app from "./app.js";

app.listen(3000, () => {
  console.log("🚀 " + config.app_name + " Started on Port 3000 🤖");
});
