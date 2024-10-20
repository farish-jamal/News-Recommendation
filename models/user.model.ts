import mongoose from "mongoose";

interface IUser {
 name: string,
 email: string,
 avatar: string,
 preferences: {
  topics: Array<string>,
  language: Array<string>,
  region: Array<string>,
  sources: Array<string>
 }
}

const userSchema = new mongoose.Schema<IUser>({
 name:{
  type: 'string',
  required: true,
 },
 email: {
  type: 'string',
  required: true,
  unique: true,
 },
 avatar: {
  type: 'string',
 },
 preferences: {
  topics:[{
   type: String
  }],
  language:[{
   type: String
  }],
  region:[{
   type: String
  }],
  sources:[{
   type: String
  }]
 }
}, {timestamps: true})

export const User = mongoose.model<IUser>('User', userSchema);