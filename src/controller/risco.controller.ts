import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { riscoService } from '../Service/risco.service';


@Controller('risco')
export class riscoController {
  constructor(private readonly appService: riscoService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getDados() {
    return this.appService.getDados()
  }
  @Get(':id')
  getrisco(@Param('id') id: string) {
    return this.appService.getriscoById(
      Number(id));

  }
  @Post() // responde ao POST /riscos
  create(@Body() body: { nome: string; tipo: string }) {
    return this.appService.create(body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.appService.delete(Number(id));
  }
  @Put(':id') // → PUT Exemplo/riscos/42
  update(@Param('id') id: string, @Body() body: any) { return this.appService.update(Number(id), body); }
  
  @Patch(':id') // → PATCH Exemplo /riscos/42
  patch(@Param('id') id: string, @Body() body: any) { return this.appService.patch(Number(id), body); }
}