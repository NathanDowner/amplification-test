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
  IsString,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { MenuCategoryUpdateManyWithoutMenuItemsInput } from "./MenuCategoryUpdateManyWithoutMenuItemsInput";
import { Type } from "class-transformer";
import { SizeUpdateManyWithoutMenuItemsInput } from "./SizeUpdateManyWithoutMenuItemsInput";

@InputType()
class MenuItemUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isOutOfStock?: boolean;

  @ApiProperty({
    required: false,
    type: () => MenuCategoryUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MenuCategoryUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MenuCategoryUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  menuCategories?: MenuCategoryUpdateManyWithoutMenuItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => SizeUpdateManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => SizeUpdateManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => SizeUpdateManyWithoutMenuItemsInput, {
    nullable: true,
  })
  sizes?: SizeUpdateManyWithoutMenuItemsInput;
}

export { MenuItemUpdateInput as MenuItemUpdateInput };
