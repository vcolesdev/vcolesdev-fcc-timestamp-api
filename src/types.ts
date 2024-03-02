type UnixTimestamp = typeof Date.prototype.getTime;
type UTCDateTimeString = typeof Date.prototype.toUTCString;

type DateResponse = {
  unix: UnixTimestamp | number | (() => number);
  utc: UTCDateTimeString | string | (() => string);
}

export {UnixTimestamp, UTCDateTimeString, DateResponse};