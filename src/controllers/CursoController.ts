import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import prismaClient from '../database/prismaCliente';
import { Curso } from '../model/Curso';

export class CursoController {
  static async create(request: Request, response: Response) {
    const { nome } = request.body;

    const curso = new Curso().criar(nome);

    return response.json(curso).status(201);
  }

  static async delete(request: Request, response: Response) {
    const { id } = request.params;

   new Curso().deletar(id);

    return response.json().status(204);
  }
}
