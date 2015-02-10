var http = require('http');
var Response = http.ServerResponse;


Response.prototype.jsend = function(data) {
  this.send({status: 'success', data: data});
}


Response.prototype.jfail = function(code, message) {
  if (code instanceof Error) {
    this.send({status: 'fail', code: code.name, message: code.message});
    return;
  }
  if ((code instanceof String || code instanceof Number) && message) {
    this.send({status: 'fail', code: code, message: message});
    return;
  }
  if (code instanceof String || code instanceof Number) {
    this.send({status: 'fail', message: code});
    return;
  }
  this.send({status: 'fail', data: code});
}


Response.prototype.jerror = function(code, message) {
  if (code instanceof Error) {// allow us to pass in Error objects to simplify code elsewhere
    this.send({status: 'error', code: code.name, message: code.message});
    return;
  }
  if ((code instanceof String || code instanceof Number) && message) {
    this.send({status: 'error', code: code, message: message});
    return;
  }
  if (code instanceof String || code instanceof Number) {
    this.send({status: 'error', message: code});
    return;
  }
  this.send({status: 'error', data: code});
}
