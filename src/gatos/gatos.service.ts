import { Injectable } from '@nestjs/common';
import { Gato } from 'src/gato/gato.interface';

@Injectable()
export class GatosService {

    private readonly gatos: Gato[] = [
        {
            id: 1,
            nome: 'Black',
            raca: 'mestiça',
            idade: 2,
        },
        {
            id: 2,
            nome: 'Arthur',
            raca:'Pura',
            idade: 2,
        },
        {
            id: 3,
            nome: 'Apollo',
            raca: 'Mauris',
            idade: 9,
        }
    ];

    findAll(): Gato[] {
        return this.gatos;
    }

    findOne(id: number): Gato | undefined {
        return this.gatos.find((gato) => gato.id === id);
    }

}