import { Controller, Get, Param } from '@nestjs/common';
import { Gato } from 'src/gato/gato.interface';

@Controller('gatos')
export class GatosController {
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


    @Get()
    findAll(): Gato[] {
        return this.gatos;
    }
    
    @Get(':id')

    findOne(@Param('id') id: number): Gato{
        console.log(id);
        return {
            id: 3,
            nome: 'Apollo',
            raca: 'Mauris',
            idade: 9,
        };
    }
}

