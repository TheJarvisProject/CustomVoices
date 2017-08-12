module.exports = function(text) {
  const Logger = require("./Logger.js");
  const logger = new Logger("Jarvis");
  const googleTTS = require('google-tts-api');
  const fs = require("fs");
  const http = require('http');
  const https = require('https');
  const cmd = require('node-cmd');
  require('dotenv').config()


  // Make sure text is in a string format.
  text = text.toString();
  // Log it for debugging.
  logger.Info(text);

  if (process.env.os == "mac") {
    // Play the speech file.
    cmd.run('say '+text)
  }
}
