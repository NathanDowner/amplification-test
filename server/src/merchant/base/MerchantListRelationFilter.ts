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
import { MerchantWhereInput } from "./MerchantWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MerchantListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MerchantWhereInput,
  })
  @ValidateNested()
  @Type(() => MerchantWhereInput)
  @IsOptional()
  @Field(() => MerchantWhereInput, {
    nullable: true,
  })
  every?: MerchantWhereInput;

  @ApiProperty({
    required: false,
    type: () => MerchantWhereInput,
  })
  @ValidateNested()
  @Type(() => MerchantWhereInput)
  @IsOptional()
  @Field(() => MerchantWhereInput, {
    nullable: true,
  })
  some?: MerchantWhereInput;

  @ApiProperty({
    required: false,
    type: () => MerchantWhereInput,
  })
  @ValidateNested()
  @Type(() => MerchantWhereInput)
  @IsOptional()
  @Field(() => MerchantWhereInput, {
    nullable: true,
  })
  none?: MerchantWhereInput;
}
export { MerchantListRelationFilter as MerchantListRelationFilter };
