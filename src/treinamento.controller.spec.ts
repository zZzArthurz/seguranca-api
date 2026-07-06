import { Test, TestingModule } from '@nestjs/testing';
import { TreinamentoController } from './controller/treinamento.controller';

describe('TreinamentoController', () => {
  let controller: TreinamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreinamentoController],
    }).compile();

    controller = module.get<TreinamentoController>(TreinamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
