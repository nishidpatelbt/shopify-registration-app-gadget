import cors from "@fastify/cors";

export default async function (server) {
  await server.register(cors, {
    // allow CORS requests from born-dev.myshopify.com
    origin: ["https://born-dev.myshopify.com"],
    // allow GET, POST, and PUT requests
    methods: ["GET", "POST", "PUT"],
    // other options, see here: https://www.npmjs.com/package/fastify-cors
  });
}