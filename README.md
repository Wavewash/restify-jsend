
Adds jsend() and jfail() and jerror() to the restify.response object.
(Which is very much like the express response object)

http://labs.omniti.com/labs/jsend

## Install

npm install wavewash/restify-jsend

## Use

```
// require after you require express
require('restify-jsend');

// in your route
function(res, req, next) {
  res.jsend({...data object...});
  // sends -> {"status": "success", data: {... data object...}}

  res.jfail({... data object...});
  // sends -> {"status": "fail", data: {... data object...}}

  res.jfail('InvalidParameter', 'The name field is required.');
  // sends -> {"status": "fail", code: "InvalidParameter", message: "The name field is required."}

  res.jfail(new Error("My custom error"));
  // sends -> {"status": "fail", code: "Error", message: "My custom error"}

  res.jerror('InvalidParameter', 'The name field is required.');
  // sends -> {"status": "error", code: "InvalidParameter", message: "The name field is required."}

  res.jerror(new Error("My custom error"));
  // sends -> {"status": "error", code: "Error", message: "My custom error"}
}
```

## License

(The MIT License)

This library was forked from Sean Wesenberg's library &lt;wookets@gmail.com&gt; 
https://github.com/wookets/express-jsend
