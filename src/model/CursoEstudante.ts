import { CursoEstudante as CursoEstudantePersistencia } from "@prisma/client";
import prismaClient from "../database/prismaCliente";

export class CursoEstudante {
  
  async criar(id_curso: string, id_estudante: string): Promise<CursoEstudantePersistencia> {
    const cursoEstudante = await prismaClient.cursoEstudante.create({
      data: {
        id_curso,
        id_estudante,
      },
    });

    return cursoEstudante;
  }

  async deletar(idCursoEstudante: string): Promise<void> {
    await prismaClient.cursoEstudante.delete({
      where: { id: idCursoEstudante },
    });
}
}