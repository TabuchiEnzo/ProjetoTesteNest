import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { FilmesService } from '../services/filmes.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Get()
  async getAll(): Promise<any[]> {
    return await prisma.filme.findMany();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<any> {
    return await prisma.filme.findUnique({ where: { id: Number(id) } });
  }

  @Post()
  async create(@Body() data: any): Promise<any> {
    return await prisma.filme.create({ data });
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: any): Promise<any> {
    return await prisma.filme.update({ where: { id: Number(id) }, data });
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    return await prisma.filme.delete({ where: { id: Number(id) } });
  }
}
