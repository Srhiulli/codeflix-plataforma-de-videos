import { IsString, MaxLength, IsNotEmpty, IsOptional, IsBoolean } from "class-validator"
import { Category } from "./category.entity"
import { ClassValidatorFields } from "../../shared/domain/validator/class-validator-fields"

class CategoryRules{
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsOptional()
    description: string | null

    @IsBoolean()
    @IsNotEmpty()
    is_active: boolean

    constructor({
        name,
        description,
        is_active
    }: Category) {
        Object.assign(this, { name, description, is_active })
    }
}

// class CategoryValidator extends ClassValidatorFields<CategoryRules>{
//     validate(entity: Category) {
        
//     }
// }