#!/usr/bin/env node
"use strict";

const { networkInterfaces } = require("os");

const nets = networkInterfaces();
const results = {}; // or just '{}', an empty object

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
    if (net.family === "IPv4" && !net.internal) {
      if (!results[name]) {
        results[name] = [];
      }

      results[name].push(net.address);
    }
  }
}

const ipAddress = results.en0 && results.en0[0];

if (ipAddress) {
  console.log(
    `🥳 Server running on local wifi: http://${ipAddress}:3000

Assuming you didn't run on a different port, this should now be running there.`
  );
}
