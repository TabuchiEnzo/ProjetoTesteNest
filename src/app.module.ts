import { Module } from '@nestjs/common';
import { FilmesModule } from './filmes/modules/filmes.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [FilmesModule],
  providers: [PrismaService],
})
export class AppModule {}
