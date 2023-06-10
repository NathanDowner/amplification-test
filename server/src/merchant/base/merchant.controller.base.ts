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
import { MerchantService } from "../merchant.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MerchantCreateInput } from "./MerchantCreateInput";
import { MerchantWhereInput } from "./MerchantWhereInput";
import { MerchantWhereUniqueInput } from "./MerchantWhereUniqueInput";
import { MerchantFindManyArgs } from "./MerchantFindManyArgs";
import { MerchantUpdateInput } from "./MerchantUpdateInput";
import { Merchant } from "./Merchant";
import { MenuFindManyArgs } from "../../menu/base/MenuFindManyArgs";
import { Menu } from "../../menu/base/Menu";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MerchantControllerBase {
  constructor(
    protected readonly service: MerchantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Merchant })
  @nestAccessControl.UseRoles({
    resource: "Merchant",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: MerchantCreateInput): Promise<Merchant> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        logo: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Merchant] })
  @ApiNestedQuery(MerchantFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Merchant",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Merchant[]> {
    const args = plainToClass(MerchantFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        logo: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Merchant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Merchant",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MerchantWhereUniqueInput
  ): Promise<Merchant | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        logo: true,
        name: true,
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
  @swagger.ApiOkResponse({ type: Merchant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Merchant",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() data: MerchantUpdateInput
  ): Promise<Merchant | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          logo: true,
          name: true,
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
  @swagger.ApiOkResponse({ type: Merchant })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Merchant",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MerchantWhereUniqueInput
  ): Promise<Merchant | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          logo: true,
          name: true,
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
  @common.Get("/:id/menus")
  @ApiNestedQuery(MenuFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async findManyMenus(
    @common.Req() request: Request,
    @common.Param() params: MerchantWhereUniqueInput
  ): Promise<Menu[]> {
    const query = plainToClass(MenuFindManyArgs, request.query);
    const results = await this.service.findMenus(params.id, {
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

  @common.Post("/:id/menus")
  @nestAccessControl.UseRoles({
    resource: "Merchant",
    action: "update",
    possession: "any",
  })
  async connectMenus(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menus: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/menus")
  @nestAccessControl.UseRoles({
    resource: "Merchant",
    action: "update",
    possession: "any",
  })
  async updateMenus(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menus: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/menus")
  @nestAccessControl.UseRoles({
    resource: "Merchant",
    action: "update",
    possession: "any",
  })
  async disconnectMenus(
    @common.Param() params: MerchantWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menus: {
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
