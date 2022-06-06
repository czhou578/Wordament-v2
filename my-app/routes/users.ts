import express, { Express, Request, Response } from 'express';


require("dotenv").config();
// const express = require("express");
const database = require("../database");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/loggedin", (req: Request, res: Response) => {
  const { loginRequestObj } = req.body;
  console.log(loginRequestObj);

  let sql = `SELECT * FROM User WHERE Username = '${loginRequestObj.userName}' AND LoginPassword = '${loginRequestObj.password}'`;
  database.query(sql, function (error: Error, result: any) {
    if (error) throw error;
    const user = { name: loginRequestObj.userName };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.send({ accessToken: accessToken });
  });
});

router.post("/new-user", (req: Request, res: Response) => {
  console.log(req.body);
  const { userName, password, firstName, lastName, id } = req.body;

  let sql = `INSERT INTO User(ID, Username, FirstName, LastName, LoginPassword) VALUES ('${id}', '${userName}', '${firstName}', '${lastName}', '${password}')`;
  database.query(sql, function (error: Error, result: any) {
    if (error) throw error;
    const user = { name: userName };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.send({ accessToken: accessToken });
  });
});

// function authenticateToken(req: Request, res: Response, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.send(403);
//     req.user = user;
//     next();
//   });
// }

module.exports = router;