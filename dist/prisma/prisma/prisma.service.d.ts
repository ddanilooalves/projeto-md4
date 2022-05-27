import { INestApplication, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    users: any;
    user: any;
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}