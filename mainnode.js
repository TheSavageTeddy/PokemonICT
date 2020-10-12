var http = require("http");
var fs = require("fs");  

http.createServer(function (req, res) {
    /*
    res.writeHead(301,{Location: './menu.html'});
    res.end();
    */
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile("./menu.html", function(error, data) {  
        if (error) {  
            res.writeHead(404);  
            res.write(error);  
        } else {  
            res.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            res.write(data);    
        }  
    });
    

   //

/*


    const { networkInterfaces } = require('os');

    const nets = networkInterfaces();
    const results = Object.create(null); // or just '{}', an empty object

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }

                results[name].push(net.address);
            }
        }
    }
    res.end(results["en0"][0]);
    */
}).listen(8080);
