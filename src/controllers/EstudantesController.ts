import { Request, Response } from 'express';
import prismaClient from '../database/prismaCliente';
import { Estudante } from '../model/Estudante';

export class EstudantesController {
  static async create(request: Request, response: Response) {
    const { nome } = request.body;

    const estudante = new Estudante().criar(nome);

    return response.json(estudante).status(201);
  }

  static async list (request: Request, response: Response) {

    const estudante = new Estudante().listar();

    return response.json(estudante).status(200);
  }

  static async find (request: Request, response: Response) {
    const { id } = request.params;
    const estudante = new Estudante().obter(id);

    return response.json(estudante).status(200);
  }

  static async delete(request: Request, response: Response) {
    const { id } = request.params;

   new Estudante().deletar(id);

    return response.json().status(204);
  }
}
