import express from 'express';
import  path from 'path';
import  cookieParser from 'cookie-parser';
import  logger from 'morgan';
import BodyParser from "body-parser";
import  mongoose from "mongoose";
import  Bcrypt from ("bcryptjs");
import  searchProperty  from "./routes/searchProperty";
import usersRouter from "./routes/users";

var app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extend: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/searchProperty',searchProperty);


module.exports = app;
