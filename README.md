# Vcolesdev - Timestamp Microservice

## Overview

This example is the boilerplate code for the Timestamp Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice

## Features

- Express.js
- Node.js

## Extra Credit

- nodemon
- TypeScript, tsc

### To Do

- Add a frontend form for users to input a date string and get the response from the API.

## Description

This project is a simple microservice that takes a date string as a parameter and returns a JSON object with a Unix timestamp and a UTC timestamp.

## Requirements

1. A request to `/api/:${date}?` with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type `Number`)

2. A request to `/api/:${date}?` with a valid date should return a JSON object with a utc key that is a string of the input date in the format: `Thu, 01 Jan 1970 00:00:00 GMT`

3. A request to `/api/1451001600000` should return `{ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }`

4. Your project can handle dates that can be successfully parsed by `new Date(date_string)`

5. If the input date string is invalid, the API returns an object having the structure `{ error : "Invalid Date" }`

6. An empty `${date}` parameter should return the current time in a JSON object with a `unix` key

7. An empty `${date}` parameter should return the current time in a JSON object with a `utc` key

## License

MIT | webdev@vcoles.com