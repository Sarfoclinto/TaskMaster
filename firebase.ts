import { FirebaseApp, initializeApp } from "firebase/app";
import Constants from "expo-constants";
import "dotenv/config";

const firebaseConfig = Constants.expoConfig?.extra?.firebaseConfig;

if (!firebaseConfig) {
  throw new Error("Missing Firebase config in app.json");
}

const app: FirebaseApp = initializeApp({
  ...firebaseConfig,
  apiKey: process.env.VITE_APP_API_KEY,
});
export default app;
