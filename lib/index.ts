import { connectionFactory } from "./nest-minio.connection.providers";
import { InjectMinio } from "./nest-minio.decorator";
import { NestMinioModule } from "./nest-minio.module";
import { ConfigurableModuleClass } from "./nest-minio.module-definition";
import { NestMinioOptions } from "./nest-minio.options";
import { NestMinioService } from "./nest-minio.service";

export {
    connectionFactory,
    InjectMinio,
    ConfigurableModuleClass,
    NestMinioModule,
    NestMinioOptions,
    NestMinioService
}