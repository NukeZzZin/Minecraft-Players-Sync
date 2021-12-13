import varint from "varint";
import Int64 from "node-int64";

export default class protocol {
    public static shared: protocol = new protocol(); //* init protocol class: protocol

    public static createHandshakePacket(address: string, port: number, protocol: number): Buffer {
        let buffer = Buffer.allocUnsafe(2);
        buffer.writeUInt16BE(port, 0);

        return Buffer.concat([
            this.createPacket(0, Buffer.concat([
                Buffer.from(varint.encode(protocol)),
                Buffer.from(varint.encode(address.length)),
                Buffer.from(address, "utf8"),
                buffer,
                Buffer.from(varint.encode(1))
            ])),
            this.createPacket(0, Buffer.alloc(0))
        ]);
    }

    public static createPingPacket(timestamp: number): Buffer {
        return this.createPacket(1, new Int64(timestamp).toBuffer());
    }

    public static createPacket(packetID: number, packetData: Buffer): Buffer {
        return Buffer.concat([
            Buffer.from(varint.encode(varint.encodingLength(packetID) + packetData.length)),
            Buffer.from(varint.encode(packetID)),
            packetData
        ]);
    }
}
