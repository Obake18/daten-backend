import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { create } from 'domain';
import { Response } from 'express';
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

    // Retorna todos os gatos
    @Get()
    findAll(): Gato[] {
        return this.gatos;
    }

    // Retorna um gato específico pelo id
    @Get(':id')
    findOne(@Param('id') id: number): Gato {
        console.log(id);
        return {
            id: 3,
            nome: 'Apollo',
            raca: 'Mauris',
            idade: 9,
        };
    }

    // Exclui um gato pelo id
    @Delete(':id')
    delete(@Param('id') id: string, @Res() response: Response) {
        const index = this.gatos.findIndex((gato) => gato.id === Number(id));
        if (index >= 0) {
            this.gatos.splice(index, 1);
            response.status(HttpStatus.OK).send('Gato removido com sucesso, SEU ASSASSINO!! QUERO TODO O SOFRIMENTO NA SUA VIDA, QUE A DESGRAÇA CAIA NAS SUAS COSTAS!!');
        } else {
            response.status(HttpStatus.NOT_FOUND).send('Não foi possível encontrar o gato');
        }
    }
    
    // Cria um novo gato
    @Post()
    create(@Body() gato : Gato) {
        this.gatos.push(gato);
        return gato;
    }

    @Put(':id')
    update(@Body() gato : Gato) {
        const index = this.gatos.findIndex((gato) => gato.id === Number(gato.id));
        if (index >= 0) {
            this.gatos[index] = gato;
        }
        return gato;
    };
}