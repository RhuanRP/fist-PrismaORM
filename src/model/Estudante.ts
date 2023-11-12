import { Estudante as EstudantePersistencia } from "@prisma/client";
import prismaClient from "../database/prismaCliente";

export class Estudante{

  async salvar(idEstudante: string , nome: string): Promise<EstudantePersistencia> {
    const estudante = await prismaClient.estudante.update({
      where: { id: idEstudante },
      data: {nome},
    });
    
    return estudante;
  }

  async criar(nome: string): Promise<EstudantePersistencia> {
    const estudante = await prismaClient.estudante.create({
      data: {
        nome,
      },
    });

    return estudante;
  }

  async deletar(idEstudante: string): Promise<void> {
    await prismaClient.estudante.delete({
      where: { id: idEstudante },
    })
  }
  
  async listar(): Promise<EstudantePersistencia[]> {
    const estudantes = await prismaClient.estudante.findMany();
    return estudantes;
  }

  async obter(idEstudante: string): Promise<EstudantePersistencia> {
    const estudantes = await prismaClient.estudante.findFirst({where: { id: idEstudante}});
    return estudantes;
  }

}