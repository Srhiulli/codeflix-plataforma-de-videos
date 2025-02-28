
export type CategoryConstructorProps = {
    category_id?: string;
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
    category_id: string;
    name: string
    description: string | null;
    is_active: boolean;
    created_at: Date;

    constructor( props:CategoryConstructorProps) {
        this.category_id = props.category_id
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true
        this.created_at = props.created_at ?? new Date()
    }

    //Serve para criar uma nova categoria (Factory Method) category.create({name: 'Category 1'}), já o contrutor é apenas para usar as categorias que já existem
    static create(props: CategoryConstructorProps): Category {
        return new Category(props)
    }
    
}