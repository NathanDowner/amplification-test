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
import { MenuCategoryCreateNestedManyWithoutMenuItemsInput } from "./MenuCategoryCreateNestedManyWithoutMenuItemsInput";
import { Type } from "class-transformer";
import { SizeCreateNestedManyWithoutMenuItemsInput } from "./SizeCreateNestedManyWithoutMenuItemsInput";

@InputType()
class MenuItemCreateInput {
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
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isOutOfStock!: boolean;

  @ApiProperty({
    required: false,
    type: () => MenuCategoryCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => MenuCategoryCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => MenuCategoryCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  menuCategories?: MenuCategoryCreateNestedManyWithoutMenuItemsInput;

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
    type: () => SizeCreateNestedManyWithoutMenuItemsInput,
  })
  @ValidateNested()
  @Type(() => SizeCreateNestedManyWithoutMenuItemsInput)
  @IsOptional()
  @Field(() => SizeCreateNestedManyWithoutMenuItemsInput, {
    nullable: true,
  })
  sizes?: SizeCreateNestedManyWithoutMenuItemsInput;
}

export { MenuItemCreateInput as MenuItemCreateInput };