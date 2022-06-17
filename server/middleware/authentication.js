const express = require("express");
const app = expresss();
app.use((req, res, next) => {
  if (!req.header.authentication) {
  }
});
