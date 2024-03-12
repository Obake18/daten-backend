import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatosController } from './gatos/gatos.controller';
import { GatosService } from './gatos/gatos.service';

@Module({
  imports: [],
  controllers: [AppController, GatosController],
  providers: [AppService, GatosService],
})
export class AppModule {}
