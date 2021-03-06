import "dotenv/config";
import express from 'express';
import "./database";
import queryRoutes from './routes/query.route';
import blogRoutes from './routes/blog.route';
import authRoutes from './routes/auth.route';
import subRoutes from './routes/sub.route';
//swagger-ui
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./doc.json";
const server = express();
server.use(cors());
server.use(morgan("dev"));

server.get('/', (req, res) => {
    res.status(200).json({success: true, message: "hurray!! server is on"})
});
server.use(express.json());

server.use('/api/v1/query', queryRoutes);
server.use('/api/v1/blog', blogRoutes);
server.use('/api/v1/auth', authRoutes);
server.use('/api/v1/subs', subRoutes);



server.use("/api/v1/", authRoutes,queryRoutes ,blogRoutes,subRoutes);
server.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc, { explorer: true })
);
server.use("*", (req, res, next) => {
    res.status(404).json({
        error: "NOT FOUND",
    });
});

export default server;


