const MONGODB_CONNECTION: any = process.env.DEV_DATABASE_URL;
import mongoose from "mongoose";
export class DBConfig {
  constructor() {
    this.openConnection();
  }

  openConnection = async () => {
    await mongoose.connect(MONGODB_CONNECTION).catch(err => {
      console.log(`Oops something went wrong ${err}`);
    });

    console.log(`Successfully`);
  };
}
