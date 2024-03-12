import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { Gato } from 'src/gato/gato.interface';
import { GatosService } from './gatos.service';

@Controller('gatos')
export class GatosController {
    constructor(private gatosService: GatosService) {}

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

    /**
     * @Get()
     * Retorna todos os gatos.
     * Rota: GET /gatos
     * @returns {Gato[]} - Retorna um array de gatos.
     */
    @Get()
    findAll(): Gato[] {
        return this.gatosService.findAll();
    }

    /**
     * @Get(':id')
     * Retorna um gato específico pelo id.
     * Rota: GET /gatos/:id
     * @param {number} id - O id do gato.
     * @param {Response} response - O objeto de resposta do express.
     * @returns {Gato} - Retorna o gato encontrado ou uma mensagem de erro.
     */
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number, @Res() response: Response) {
        const gato = this.gatosService.findOne(id);
        if (gato) {
            response.status(HttpStatus.OK).json(gato);
        } else {
            response.status(HttpStatus.NOT_FOUND).send('Não foi possível encontrar o gato');
        }
    }

    /**
     * @Delete(':id')
     * Exclui um gato pelo id.
     * Rota: DELETE /gatos/:id
     * @param {number} id - O id do gato.
     * @param {Response} response - O objeto de resposta do express.
     * @returns {string} - Retorna uma mensagem de sucesso ou de erro.
     */
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number, @Res() response: Response) {
        const index = this.gatos.findIndex((gato) => gato.id === id);
        if (index >= 0) {
            this.gatos.splice(index, 1);
            response.status(HttpStatus.OK).send('Gato removido com sucesso, SEU ASSASSINO!! QUERO TODO O SOFRIMENTO NA SUA VIDA, QUE A DESGRAÇA CAIA NAS SUAS COSTAS!!');
        } else {
            response.status(HttpStatus.NOT_FOUND).send('Não foi possível encontrar o gato');
        }
    }

    /**
     * @Post()
     * Cria um novo gato.
     * Rota: POST /gatos
     * @param {Gato} gato - O objeto gato a ser criado.
     * @returns {Gato} - Retorna o gato criado.
     */
    @Post()
    create(@Body() gato: Gato) {
        this.gatos.push(gato);
        return gato;
    }

    /**
     * @Put(':id')
     * Atualiza um gato existente.
     * Rota: PUT /gatos/:id
     * @param {number} id - O id do gato.
     * @param {Gato} gato - O objeto gato com as informações atualizadas.
     * @param {Response} response - O objeto de resposta do express.
     * @returns {Gato} - Retorna o gato atualizado ou uma mensagem de erro.
     */
    @Put(':id')
    update(@Param('id', ParseIntPipe) id : number, @Body() gato: Gato, @Res() response: Response) {
        const index = this.gatos.findIndex((gato) => gato.id === id);
        if (index >= 0) {
            this.gatos[index] = gato;
            response.status(HttpStatus.OK).json(gato);
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }
    }
}
