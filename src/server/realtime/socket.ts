import { Server } from "socket.io";

export type RealtimeServer = Server;

export function createRealtimeServer(httpServer: Parameters<typeof Server>[0]) {
  return new Server(httpServer, {
    path: process.env.SOCKET_IO_PATH ?? "/api/realtime/socket",
    cors: {
      origin: process.env.NEXT_PUBLIC_APP_URL,
      credentials: true
    }
  });
}
