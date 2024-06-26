import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pedrodev:WWE2024pedro@crudnest.vzjqsu9.mongodb.net/',
    ),
    UsersModule,
  ],
})
export class AppModule {}
