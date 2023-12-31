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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { MenuUpdateManyWithoutMerchantsInput } from "./MenuUpdateManyWithoutMerchantsInput";
import { Type } from "class-transformer";

@InputType()
class MerchantUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  logo?: string;

  @ApiProperty({
    required: false,
    type: () => MenuUpdateManyWithoutMerchantsInput,
  })
  @ValidateNested()
  @Type(() => MenuUpdateManyWithoutMerchantsInput)
  @IsOptional()
  @Field(() => MenuUpdateManyWithoutMerchantsInput, {
    nullable: true,
  })
  menus?: MenuUpdateManyWithoutMerchantsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;
}

export { MerchantUpdateInput as MerchantUpdateInput };
