import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import getRoutes from "./routes";
import getApiRoutes from "./routes/api";
import serverMsg from "./serverMsg";
import TimeStampsAPI from "./api/TimeStampsApi";

dotenv.config();

/* Config */

const appPort = process.env.PORT || 3000;
const corsOptions = {optionsSuccessStatus: 200};

/* Initialize App */

export const app = express();
export const timeStampsApi = new TimeStampsAPI();

/* Middleware */

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.static("public"));

/* Routes */

getRoutes(app);
getApiRoutes(app);

// Start server
const listener = app.listen(appPort, () => serverMsg.listener);
listener.on("error", (error) => serverMsg.error(error));
