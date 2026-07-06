import { Module } from '@nestjs/common';
import { AppController } from './controller/epi.controller';
import { AppService } from './Service/epi.service';
import { EpiRepository } from './repository/epi.repository';
import { treinamentoService } from './Service/treinamento.service';
import { treinamentoRepository } from './repository/treinamento.repository';
import { TreinamentoController } from './controller/treinamento.controller';

@Module({
  imports: [],
  controllers: [AppController, TreinamentoController],
  providers: [AppService, EpiRepository, treinamentoService, treinamentoRepository],
})
export class AppModule {}
