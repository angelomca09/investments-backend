import fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";

// Load the environment variables
dotenv.config();

const app = fastify();

// Enable CORS for all routes
app.register(cors, {
  origin: true,
});

//TODO: Add your routes here
app.get("/", async () => {
  return { hello: "world" };
});

// Get the host and port from the environment variables or use default values
const host = process.env.BASE_URL || "127.0.0.1";
// + is used to convert the string to a number
const port = +(process.env.PORT || 3000);

app.listen({ host, port })
  .then((address) => {
    console.log(`Server running on ${address} !`);
  })