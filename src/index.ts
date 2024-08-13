import http from "http";


const PORT = 3000;
const server = http.createServer((req, res) => {
    res.write("Hello, world!");
    res.end();

});

server.listen(PORT, () => {
    console.log(`Started app in port ${PORT}`);
    
});