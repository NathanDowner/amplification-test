import { Module } from "@nestjs/common";
import { MenuCategoryModuleBase } from "./base/menuCategory.module.base";
import { MenuCategoryService } from "./menuCategory.service";
import { MenuCategoryController } from "./menuCategory.controller";

@Module({
  imports: [MenuCategoryModuleBase],
  controllers: [MenuCategoryController],
  providers: [MenuCategoryService],
  exports: [MenuCategoryService],
})
export class MenuCategoryModule {}
