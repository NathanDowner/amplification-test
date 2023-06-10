import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MenuCategoryServiceBase } from "./base/menuCategory.service.base";

@Injectable()
export class MenuCategoryService extends MenuCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
