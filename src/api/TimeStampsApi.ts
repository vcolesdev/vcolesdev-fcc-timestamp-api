import {Request, Response} from "express";
import {DateResponse} from "../types";

/**
 * TimeStampsAPI
 */
export default class TimeStampsAPI {
  date: Date;
  currentUnixDate: number;
  currentUTCDate: string;

  constructor() {
    this.date = new Date();
    this.currentUnixDate = this.getCurrentDate();
    this.currentUTCDate = this.getUTCDate();

    this.init();
  }

  /**
   * checkIfValidDate()
   * @param customDate
   * Check if the date string is valid.  Return the date if valid, otherwise return false.
   */
  checkIfValidDate = (customDate: Date) => {
    return customDate.toString() !== "Invalid Date";
  }

  /**
   * getCurrentDate()
   * Get the current date in milliseconds
   */
  getCurrentDate = () => {
    return new Date().getTime();
  };

  /**
   * getDateUTC()
   * @param params
   * Get the current date in UTC format
   */
  getUTCDate = (params?: Date) => {
    if (!params) {
      return this.date.toUTCString();
    } else {
      return new Date(params).toUTCString();
    }
  }

  /**
   * getDefaultDateResponse()
   * Get the default response for the timestamp microservice.
   */
  getDefaultDateResponse = () => {
    return {
      unix: this.currentUnixDate, // current date in milliseconds
      utc: this.currentUTCDate // current date in UTC format
    }
  }

  /**
   * getCustomDateRes()
   * @param dateStr
   * @param errMsgResponse
   * Get the custom date response or return an error message.
   */
  getCustomDateResponse = (dateStr?: string, errMsgResponse?: {error: string}) => {
    // If the error message response is not set, use the default message.
    if (!errMsgResponse)
      errMsgResponse = {error: "Invalid Date"};

    // If the date string is not set, return the default date response
    if (!dateStr)
      return this.getDefaultDateResponse();

    // If the date string is "now", return the default date response
    if (dateStr === "now") {
      return this.getDefaultDateResponse();
    }

    // If the date is given in milliseconds, return the custom date response
    if (!isNaN(Number(dateStr))) {
      return {
        unix: Number(dateStr),
        utc: new Date(Number(dateStr)).toUTCString()
      }
    }

    // Get the custom date
    const customDate = new Date(dateStr);

    // Check if the date is valid, if not return the error message response
    const isValidDate = this.checkIfValidDate(customDate);
    if (!isValidDate)
      return errMsgResponse;

    // Return the custom date response
    const dateResponse: DateResponse = {
      unix: customDate.getTime(),
      utc: customDate.toUTCString()
    }

    console.log("Date response:", dateResponse);
    return dateResponse;
  }

  /**
   * handleGetTimeStampsData()
   * Get the timestamps route
   */
  handleGetTimeStampsData = (req: Request, res: Response) => {
    const dateParam: string | number = req.params.date;

    if (!dateParam) {
      console.log("No date string provided. Using default date response.");
    }

    // Get our timestamps data
    let timestamps = this.getCustomDateResponse(dateParam);

    // Else, return the custom date response
    return res.json({
      "data": timestamps
    });
  }

  /**
   * init()
   * Initialize the timestamp microservice.
   */
  init = () => {
    console.log("Timestamp microservice initialized!");
  }
}