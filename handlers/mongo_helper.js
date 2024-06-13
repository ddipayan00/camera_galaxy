import mongoose from "mongoose";
export const mongo_connection_state = () => {
  console.log(
    "mongoose.connection.readyState : ",
    mongoose.connection.readyState
  );
  return mongoose.connection.readyState;
};
