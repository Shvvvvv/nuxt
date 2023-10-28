const express = require("express");
const { Router } = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const dotenv = require("dotenv");
import redis from "./redis";

const router = Router();

dotenv.config({
  path: ".env." + process.env.NODE_ENV,
});

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  axios.defaults.baseURL = process.env.BASE_API_URL;
  if (req.headers.authorization) {
    axios.defaults.headers.common.Authorization = req.headers.authorization;
  } else {
    axios.defaults.headers.common.Authorization = "";
  }
  next();
});

router.post("/auth/login", (req, res) => {
  axios
    .post(req.path, req.body)
    .then((response) => {
      if (response.status == 200) {
        if (response.data.message == "LOGIN SUCCESS") {
          return res.json({
            code: response.status,
            status: response.data.status,
            data: response.data.data,
            message: response.data.message,
          });
        } else {
          return res.json({
            code: 500,
            status: "Error",
            message: response.data.message,
            data: [],
          });
        }
      }
    })
    .catch((err) => {
      return res.json({
        code: 500,
        status: "Error",
        message: err.message,
        data: [],
      });
    });
});

router.get("/barang/find-all", (req, res) => {
  redis.get("product").then((product) => {
    if (product !== null) {
      console.log("Data get from redis");
      const response = JSON.parse(product);
      return res.json({
        code: response.status,
        status: response.status,
        message: response.message,
        data: response.data,
        from: "redis",
      });
    } else {
      console.log("Data get from api");
      axios
        .get(req.path, {
          params: req.query,
        })
        .then((response) => {
          //   console.log(response);
          redis.set("product", JSON.stringify(response.data));
          return res.json({
            code: response.status,
            status: response.data.status,
            message: response.data.message,
            data: response.data.data,
          });
        })
        .catch((err) => {
          return res.json({
            code: 500,
            status: "Error",
            message: err,
            data: [],
          });
        });
    }
  });
});

app.use(router);

module.exports = {
  base: process.env.BASE_URL,
  handler: app,
};
