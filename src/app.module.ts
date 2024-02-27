import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatosController } from './gatos/gatos.controller';

@Module({
  imports: [],
  controllers: [AppController, GatosController],
  providers: [AppService],
})
export class AppModule {}
