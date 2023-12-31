/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemWhereInput } from "./MenuItemWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MenuItemListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MenuItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereInput)
  @IsOptional()
  @Field(() => MenuItemWhereInput, {
    nullable: true,
  })
  every?: MenuItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereInput)
  @IsOptional()
  @Field(() => MenuItemWhereInput, {
    nullable: true,
  })
  some?: MenuItemWhereInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemWhereInput,
  })
  @ValidateNested()
  @Type(() => MenuItemWhereInput)
  @IsOptional()
  @Field(() => MenuItemWhereInput, {
    nullable: true,
  })
  none?: MenuItemWhereInput;
}
export { MenuItemListRelationFilter as MenuItemListRelationFilter };
