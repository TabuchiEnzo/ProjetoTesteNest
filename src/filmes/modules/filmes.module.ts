import { Module } from '@nestjs/common';
import { FilmesService } from '../services/filmes.service';
import { FilmesController } from '../controllers/filmes.controller';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FilmesService],
  controllers: [FilmesController],
})
export class FilmesModule {}
