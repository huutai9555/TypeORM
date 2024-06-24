import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"
import { PhotoMetadata } from "./entity/PhotoMetadata"
// import { PhotoMetadata } from "./entity/PhotoMetadata"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Photo, PhotoMetadata],
    migrations: [],
    subscribers: [],
})
