import {Express, Request, Response} from "express";
import {timeStampsApi} from "../index";

// Handle the test route
const handleApiTestRoute = (req: Request, res: Response) => {
  res.json({message: "Test endpoint"});
}

/**
 * getRoutes()
 * @param app
 */
export default function getApiRoutes(app: Express) {
  app.get("/api/test", function(req: Request, res: Response) {
    return handleApiTestRoute(req, res)
  });

  app.get(`/api/timestamp/:date?`, function(req: Request, res: Response) {
    return timeStampsApi.handleGetTimeStampsData(req, res);
  });
}