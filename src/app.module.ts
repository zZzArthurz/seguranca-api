import { Module } from '@nestjs/common';
import { AppController } from './controller/epi.controller';
import { AppService } from './Service/epi.service';
import { EpiRepository } from './repository/epi.repository';
import { treinamentoService } from './Service/treinamento.service';
import { treinamentoRepository } from './repository/treinamento.repository';
import { TreinamentoController } from './controller/treinamento.controller';
import { riscoController } from './controller/risco.controller';
import { riscoService } from './Service/risco.service';
import { RiscoRepository } from './repository/risco.repository';
import { AuthService } from './Service/auth.service';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, TreinamentoController, riscoController, AuthController],
  providers: [AppService, EpiRepository, treinamentoService, treinamentoRepository, treinamentoService, riscoController, riscoService, RiscoRepository, AuthService],
})
export class AppModule {}
