import { Curso as CursoPersistencia } from "@prisma/client";
import prismaClient from "../database/prismaCliente";

export class Curso{
  
  async salvar(idCurso: string , nome: string): Promise<CursoPersistencia> {
    const curso = await prismaClient.curso.update({
      where: { id: idCurso },
      data: {nome},
    });
    
    return curso;
  }

  async criar(nome: string): Promise<CursoPersistencia>{
    const curso = await prismaClient.curso.create
    ({
      data: {
        nome,
      },
    });

    return curso;
  }

  async deletar(idCurso: string): Promise<void> {
    await prismaClient.curso.delete({
      where: { id: idCurso },
    })
  }
}
