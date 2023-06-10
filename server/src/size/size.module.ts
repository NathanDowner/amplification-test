import { Module } from "@nestjs/common";
import { SizeModuleBase } from "./base/size.module.base";
import { SizeService } from "./size.service";
import { SizeController } from "./size.controller";

@Module({
  imports: [SizeModuleBase],
  controllers: [SizeController],
  providers: [SizeService],
  exports: [SizeService],
})
export class SizeModule {}
