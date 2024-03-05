import { Test, TestingModule } from '@nestjs/testing';
import { GatosController } from './gatos.controller';

// Este código está testando a classe GatosController

describe('GatosController', () => {
  let controller: GatosController;

  // Configura o módulo de teste antes de cada caso de teste

  beforeEach(async () => {
    // Cria um módulo de teste usando o método createTestingModule
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GatosController],
    }).compile();

    // Obtém uma instância da classe GatosController do módulo de teste
    controller = module.get<GatosController>(GatosController);
  });

  // Caso de teste: verifica se o controller está definido

  it('should be defined', () => {
    // Espera-se que o objeto controller esteja definido
    expect(controller).toBeDefined();
  });
});