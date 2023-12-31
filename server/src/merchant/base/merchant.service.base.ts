/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Merchant, Menu } from "@prisma/client";

export class MerchantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MerchantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantFindManyArgs>
  ): Promise<number> {
    return this.prisma.merchant.count(args);
  }

  async findMany<T extends Prisma.MerchantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantFindManyArgs>
  ): Promise<Merchant[]> {
    return this.prisma.merchant.findMany(args);
  }
  async findOne<T extends Prisma.MerchantFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantFindUniqueArgs>
  ): Promise<Merchant | null> {
    return this.prisma.merchant.findUnique(args);
  }
  async create<T extends Prisma.MerchantCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantCreateArgs>
  ): Promise<Merchant> {
    return this.prisma.merchant.create<T>(args);
  }
  async update<T extends Prisma.MerchantUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantUpdateArgs>
  ): Promise<Merchant> {
    return this.prisma.merchant.update<T>(args);
  }
  async delete<T extends Prisma.MerchantDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MerchantDeleteArgs>
  ): Promise<Merchant> {
    return this.prisma.merchant.delete(args);
  }

  async findMenus(
    parentId: string,
    args: Prisma.MenuFindManyArgs
  ): Promise<Menu[]> {
    return this.prisma.merchant
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menus(args);
  }
}
