const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const moment = require("moment");
const cors = require("cors");
const sql = require("mssql");
const bodyParser = require("body-parser");
const token =
  "03ti9vnhmrwq0qhinzsw5jkj0cad97jtl1n0fpywzxloj4m0yi7kj9b0pk0m623r0elmq";

const app = express();
const PORT = 5000;
const PROXY_TARGET = 'http://usplbot.com';
app.use(cors());

const wsProxy = createProxyMiddleware({
  target: PROXY_TARGET,
  changeOrigin: true,
  ws: true
});

// Use the WebSocket proxy middleware
app.use('/socket.io/', wsProxy);


app.use(bodyParser.json());

// load mysql package
const mysql = require("mysql");

// create mysql connection
const connection = mysql.createConnection({
  host: "65.21.7.252",
  user: "dba",
  password: "Sapl@2023",
  database: "USPL",
});

// check connection
connection.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("We are now successfully connected with mysql database");
  }
});
// TODAY'S TRADE HISTORY
app.get("/trendreport", (req, res) => {
  const today = moment().format("YYYY-MM-DD");
  const userId = 1;
  const fromDt = today;
  const toDt = today;
  const reportType = "fixmargin";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results);
      console.log(results);
    }
  );
});
// TOTAL PROFIT AND LOSS
// app.get("/getTradeHistory", (req, res) => {
//   const today = moment().format("YYYY-MM-DD");

//   const userId = 1;
//   const fromDt = today;
//   const toDt = today;
//   connection.query(
//     "CALL sp_getTodayTradeHistoryReport(?, ?, ?)",
//     [userId, fromDt, toDt],
//     (error, results, fields) => {
//       if (error) {
//         console.error("Error executing the stored procedure:", error);
//         res
//           .status(500)
//           .json({ error: "Internal Server Error", message: error.message });
//         return;
//       }
//       res.json(results[1]);
//       console.log(results[1]);
//     }
//   );
// });

// fixmargin userinput Date
app.get("/fixmargin", (req, res) => {
  const today = moment().format("YYYY-MM-DD");
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "fixmargin";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results);
      console.log(results);
    }
  );
});
 



// fixlot user input date
app.get("/fixlot", (req, res) => {
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "fixlot";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results);
      console.log(results);
    }
  );
});

// cummulative user input date
app.get("/cumilative", (req, res) => {
  const today = moment().format("YYYY-MM-DD");
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "cumilative";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results);
      console.log(results);
    }
  );
});

//  ENDPOINT FOR FIXMNARGIN CHART
app.get("/fixmargin_chart", (req, res) => {
  const today = moment().format("YYYY-MM-DD");
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "fixmargin";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results[0]);
      console.log(results[0]);
    }
  );
});

//  ENDPOINT FOR FIXLOT CHART
app.get("/fixlot_chart", (req, res) => {
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "fixlot";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results[0]);
      console.log(results[0]);
    }
  );
});

//  ENDPOINT FOR CUMILATIVE CHART

app.get("/cumilative_chart", (req, res) => {
  const today = moment().format("YYYY-MM-DD");
  const userId = 1;
  const fromDt = req.query.fromDt || moment().format("YYYY-MM-DD");
  const toDt = req.query.toDt || moment().format("YYYY-MM-DD");
  const reportType = "cumilative";

  connection.query(
    "CALL sp_getTradeHistoryReport(?, ?, ?, ?)",
    [userId, fromDt, toDt, reportType],
    (error, results, fields) => {
      if (error) {
        console.error("Error executing the stored procedure:", error);
        res
          .status(500)
          .json({ error: "Internal Server Error", message: error.message });
        return;
      }
      res.json(results[0]);
      console.log(results[0]);
    }
  );
});




const { io } = require("socket.io-client");
const socket = io("http://usplbot.com");

socket.on("connect", () => {
  console.log("connected to usplbot.com");
});

socket.on("traded_optionsV2", (message) => {
  console.log(JSON.stringify(message));
  let arr = message.HA;
  // console.log(JSON.stringify(arr[arr.length - 1]));
});

socket.on("candlemin", (message) => {
  // console.log(JSON.stringify(message));
  console.log(message);
  let arr = message.HA;
  // console.log(JSON.stringify(arr[arr.length - 1]));
});

socket.on('dataReceived', message => {
  // console.log(JSON.stringify(message));
  if (message.Symbol === 'NIFTY BANK') {
      console.log(message);
      console.log(message.Price);
 
  }
 
})


app.listen(PORT, () => {
  console.log(`Proxy server is running on  port ${PORT}`);
});
