import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    RestaurantsModule,
    TypeOrmModule.forRoot({
        "type": "postgres",
        "host": "/var/run/postgresql",
        "port": 5432,
        "username": "postgres",
        "password": "0309",
        "database": "template0",
        "synchronize": true,
        "logging": true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
