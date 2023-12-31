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
import {
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsNumber,
  IsString,
} from "class-validator";
import { MenuCategoryUpdateManyWithoutMenusInput } from "./MenuCategoryUpdateManyWithoutMenusInput";
import { Type } from "class-transformer";
import { MerchantWhereUniqueInput } from "../../merchant/base/MerchantWhereUniqueInput";

@InputType()
class MenuUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isVisible?: boolean;

  @ApiProperty({
    required: false,
    type: () => MenuCategoryUpdateManyWithoutMenusInput,
  })
  @ValidateNested()
  @Type(() => MenuCategoryUpdateManyWithoutMenusInput)
  @IsOptional()
  @Field(() => MenuCategoryUpdateManyWithoutMenusInput, {
    nullable: true,
  })
  menuCategories?: MenuCategoryUpdateManyWithoutMenusInput;

  @ApiProperty({
    required: false,
    type: () => MerchantWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MerchantWhereUniqueInput)
  @IsOptional()
  @Field(() => MerchantWhereUniqueInput, {
    nullable: true,
  })
  merchant?: MerchantWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  order?: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;
}

export { MenuUpdateInput as MenuUpdateInput };
