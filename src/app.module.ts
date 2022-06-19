import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMCofig } from './boards/configs/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMCofig),
    BoardsModule
  ],
})
export class AppModule { }
