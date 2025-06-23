// postService.js
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export const createPost = async (text, email) => {
  await addDoc(collection(db, "posts"), {
    text,
    email,
    createdAt: new Date(),
  });
};
