import { Test, TestingModule } from '@nestjs/testing';
import { TreinamentoService } from './Service/treinamento.service';

describe('TreinamentoService', () => {
  let service: TreinamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreinamentoService],
    }).compile();

    service = module.get<TreinamentoService>(TreinamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
