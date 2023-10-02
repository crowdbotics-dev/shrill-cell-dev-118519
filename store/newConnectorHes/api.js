import axios from "axios"
import {
  NEW_CONNECTOR_HES_USERNAME,
  NEW_CONNECTOR_HES_PASSWORD
} from "react-native-dotenv"
const newConnectorHes = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/118519/connectors",
  auth: {
    username: NEW_CONNECTOR_HES_USERNAME,
    password: NEW_CONNECTOR_HES_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
