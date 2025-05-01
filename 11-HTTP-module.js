//os built in module has many methods and properties.

// //first you have to require the HTTP module.
const http = require('http');

// // advanced example
// const server2 = http.createServer((req, res)=>{
//   if (req.url === '/'){
//     res.writeHead(200, {'content-type':'text/html'  });
//     res.end('<p> Welcome to the page </p>');
//     return
//   }
//   if (req.url === '/about'){
//     res.writeHead(200, {'content-type':'text/html'});
//     res.end('<p> About us </p>');
//     return
//   }
  
//   res.writeHead(404, {'content-type':'text/html'});
//   res.end(`
//     <h1> Oups </h1>
//     <p> This page does not exist </p>
//     <a href="/"> Return  </a>
//     `);
  
// })

// server2.listen(5000);

// const server = http.createServer((req, res)=>{
//   console.log(`Request URL: ${req.url}`);
//   console.log(`Request Method: ${req.method}`);
//   console.log(`Request header:`, req.headers.host);
  
//   res.end('Request received.')
// })

// server.listen(5000);


// assignment
const server = http.createServer((req, res)=>{
  if (req.url === '/'){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end("Welcome to the Home Page");
    return
  }

  if (req.url === '/about'){
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end("This is the About Page");
    return
  }
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  })
  res.end('404 - Page Not Found');
});

server.listen(5000, ()=>{
  console.log(`Server has start on http://localhost:5000`);
});