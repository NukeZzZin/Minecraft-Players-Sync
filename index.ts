import server from "./src/server";
import logger from "./src/scripts/logger";
import protocol from "./src/scripts/protocol";

server.listen(Number(process.env.PORT) || 8000, () => {
    logger.sucess(`Server running in http://localhost:${Number(process.env.PORT) || 8000}.`);
    logger.info(`Server processID is 0x${process.pid.toString(16)} (${process.pid}).`); //* print Server ProcessID :3
}); //* try to start the server