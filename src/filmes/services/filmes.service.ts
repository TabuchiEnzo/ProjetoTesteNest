import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { Filme } from '@prisma/client';

@Injectable()
export class FilmesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllFilmes(): Promise<Filme[]> {
    return this.prismaService.filme.findMany();
  }

  async createFilme(data: Filme): Promise<Filme> {
    return this.prismaService.filme.create({ data });
  }

  async updateFilme(id: number, data: any): Promise<Filme> {
    return this.prismaService.filme.update({ where: { id }, data });
  }

  async deleteFilme(id: number): Promise<Filme> {
    return this.prismaService.filme.delete({ where: { id } });
  }
}
