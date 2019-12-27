import mongoose from "mongoose";
import { DB_URL } from "../config";

class Connection {
  protected url = DB_URL;
  protected connect = mongoose.connect;
  protected db = mongoose.connection;

  constructor() {
    // mongoose.Promise = global.Promise;
    this.connect(this.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }).then(res => {
      console.log("Established new connection with url", this.url);
    });
  }
}

export default new Connection();
