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

@ArgsType()
class MenuCategoryFindUniqueArgs {
  @Field(() => MenuCategoryWhereUniqueInput, { nullable: false })
  where!: MenuCategoryWhereUniqueInput;
}

export { MenuCategoryFindUniqueArgs as MenuCategoryFindUniqueArgs };
