/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { MenuCategoryWhereUniqueInput } from "./MenuCategoryWhereUniqueInput";
import { MenuCategoryUpdateInput } from "./MenuCategoryUpdateInput";

@ArgsType()
class UpdateMenuCategoryArgs {
  @Field(() => MenuCategoryWhereUniqueInput, { nullable: false })
  where!: MenuCategoryWhereUniqueInput;
  @Field(() => MenuCategoryUpdateInput, { nullable: false })
  data!: MenuCategoryUpdateInput;
}

export { UpdateMenuCategoryArgs as UpdateMenuCategoryArgs };
