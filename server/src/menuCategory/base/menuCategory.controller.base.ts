/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MenuCategoryService } from "../menuCategory.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MenuCategoryCreateInput } from "./MenuCategoryCreateInput";
import { MenuCategoryWhereInput } from "./MenuCategoryWhereInput";
import { MenuCategoryWhereUniqueInput } from "./MenuCategoryWhereUniqueInput";
import { MenuCategoryFindManyArgs } from "./MenuCategoryFindManyArgs";
import { MenuCategoryUpdateInput } from "./MenuCategoryUpdateInput";
import { MenuCategory } from "./MenuCategory";
import { MenuFindManyArgs } from "../../menu/base/MenuFindManyArgs";
import { Menu } from "../../menu/base/Menu";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MenuCategoryControllerBase {
  constructor(
    protected readonly service: MenuCategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MenuCategory })
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: MenuCategoryCreateInput
  ): Promise<MenuCategory> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        isVisible: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MenuCategory] })
  @ApiNestedQuery(MenuCategoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<MenuCategory[]> {
    const args = plainToClass(MenuCategoryFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        isVisible: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MenuCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MenuCategoryWhereUniqueInput
  ): Promise<MenuCategory | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        isVisible: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MenuCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MenuCategoryWhereUniqueInput,
    @common.Body() data: MenuCategoryUpdateInput
  ): Promise<MenuCategory | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          isVisible: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MenuCategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MenuCategoryWhereUniqueInput
  ): Promise<MenuCategory | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          isVisible: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/menu")
  @ApiNestedQuery(MenuFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async findManyMenu(
    @common.Req() request: Request,
    @common.Param() params: MenuCategoryWhereUniqueInput
  ): Promise<Menu[]> {
    const query = plainToClass(MenuFindManyArgs, request.query);
    const results = await this.service.findMenu(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        isVisible: true,

        merchant: {
          select: {
            id: true,
          },
        },

        order: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/menu")
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "update",
    possession: "any",
  })
  async connectMenu(
    @common.Param() params: MenuCategoryWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menu: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/menu")
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "update",
    possession: "any",
  })
  async updateMenu(
    @common.Param() params: MenuCategoryWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menu: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/menu")
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "update",
    possession: "any",
  })
  async disconnectMenu(
    @common.Param() params: MenuCategoryWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menu: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/menuItems")
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async findManyMenuItems(
    @common.Req() request: Request,
    @common.Param() params: MenuCategoryWhereUniqueInput
  ): Promise<MenuItem[]> {
    const query = plainToClass(MenuItemFindManyArgs, request.query);
    const results = await this.service.findMenuItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        image: true,
        isOutOfStock: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "update",
    possession: "any",
  })
  async connectMenuItems(
    @common.Param() params: MenuCategoryWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "update",
    possession: "any",
  })
  async updateMenuItems(
    @common.Param() params: MenuCategoryWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "MenuCategory",
    action: "update",
    possession: "any",
  })
  async disconnectMenuItems(
    @common.Param() params: MenuCategoryWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
