import ValidatorRules from "../../shared/domain/validator/validator-rules";
import { Uuid } from "../../shared/domain/value-objects/uuid.vo";

export type CategoryConstructorProps = {
    category_id?: Uuid;
    name: string;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date;
}

export type CategoryUpdateCommand = {
    name?: string;
    description?: string;
    is_active?: boolean;
}

export class Category{
    category_id: Uuid;
    name: string
    description: string | null;
    is_active: boolean;
    created_at: Date;

    constructor( props:CategoryConstructorProps) {
        this.category_id = props.category_id ?? new Uuid()
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true
        this.created_at = props.created_at ?? new Date()
    }

    //Serve para criar uma nova categoria (Factory Method) category.create({name: 'Category 1'}), já o contrutor é apenas para usar as categorias que já existem
    static create(props: CategoryConstructorProps): Category {
        return new Category(props)
    }

    changeName(name: string): void {
        ValidatorRules.values(name, 'name').required().string().maxLength(255)
        this.name = name
    }

    changeDescription(description: string): void {
        ValidatorRules.values(description, 'description').string().maxLength(255)
        this.description = description
    }

    activate() {
        ValidatorRules.values(this.is_active, 'is_active').boolean()
        this.is_active = true
    }

    deactivate() {
        ValidatorRules.values(this.is_active, 'is_active').boolean()
        this.is_active = false
    }
    toJSON() {
        return {
            category_id: this.category_id.id,
            name: this.name,
            description: this.description,
            is_active: this.is_active,
            created_at: this.created_at
        }
    }

}