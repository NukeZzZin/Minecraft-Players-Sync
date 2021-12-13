import net from "net";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import protocol from "./scripts/protocol";
import logger from "./scripts/logger";

const app = express();

app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json({ inflate: true, limit: 1024000 }));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/api/v1/pinger/:address/:port", (request, response, next) => {
    let connection = net.createConnection(Number(request.params.port), String(request.params.address), () => {
        connection.write(protocol.createHandshakePacket(String(request.params.address), Number(request.params.port), Number(754)));
        //* console.log(protocol.createHandshakePacket(String(request.params.address), Number(request.params.port), Number(754))); //: test
    });
});

export default app;