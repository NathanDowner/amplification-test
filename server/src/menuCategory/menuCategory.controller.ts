import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MenuCategoryService } from "./menuCategory.service";
import { MenuCategoryControllerBase } from "./base/menuCategory.controller.base";

@swagger.ApiTags("menuCategories")
@common.Controller("menuCategories")
export class MenuCategoryController extends MenuCategoryControllerBase {
  constructor(
    protected readonly service: MenuCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
