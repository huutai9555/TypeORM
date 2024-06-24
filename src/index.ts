import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    const photo = new Photo();
    photo.description = 'abc'
    photo.filename = 'bca'
    photo.id = 1
    photo.isPublished = true
    photo.name = 'hay nua'
    photo.views = 2

    const photoResponse = AppDataSource.getRepository(Photo);
    photoResponse.save(photo)

    // console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
