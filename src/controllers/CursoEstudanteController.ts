import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import prismaClient from '../database/prismaCliente';
import { CursoEstudante } from '../model/CursoEstudante';

export class CursoEstudanteController {
  static async create(request: Request, response: Response) {
    const { id_curso, id_estudante} = request.body;

    const cursoEstudante = new CursoEstudante().criar(id_curso, id_estudante);

    return response.json(cursoEstudante).status(201);
  }

  static async delete(request: Request, response: Response) {
    const { id } = request.params;

   new CursoEstudante().deletar(id);

    return response.json().status(204);
  }
}