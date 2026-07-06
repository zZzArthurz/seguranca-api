import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { treinamentoService } from 'src/Service/treinamento.service';

@Controller('treinamento')
export class TreinamentoController {
    constructor(private readonly appService: treinamentoService) { }



    @Get()
    getDados() {
        return this.appService.getDados()
    }
}
