import { Category } from '../category.entity';

describe('Category Unit Test', () => {
    test('constructor with only name', () => {
        const category = new Category({ name: 'Movie' });
        expect(category.name).toBe('Movie');
        expect(category.description).toBeNull();
        expect(category.is_active).toBeTruthy();
        expect(category.created_at).toBeInstanceOf(Date);
    });

    test('constructor with all properties', () => {
        const category = new Category({
            category_id: '123',
            name: 'Movie2',
            description: 'Category description',
            is_active: false,
            created_at: new Date('2024-01-01'),
        });
        expect(category.category_id).toBe('123');
        expect(category.name).toBe('Movie2');
        expect(category.description).toBe('Category description');
        expect(category.is_active).toBeFalsy();
        expect(category.created_at).toEqual(new Date('2024-01-01'));
    });

    test('create method should return a new category instance', () => {
        const category = Category.create({ name: 'Series' });
        expect(category).toBeInstanceOf(Category);
        expect(category.name).toBe('Series');
    });

    test('change name', () => {
        const category = new Category({ name: 'Old Name' });
        category.changeName('New Name');
        expect(category.name).toBe('New Name');
    });

    test('change description', () => {
        const category = new Category({ name: 'Category' });
        category.changeDescription('Updated description');
        expect(category.description).toBe('Updated description');
    });

    test('activate category', () => {
        const category = new Category({ name: 'Inactive Category', is_active: false });
        category.activate();
        expect(category.is_active).toBeTruthy();
    });

    test('deactivate category', () => {
        const category = new Category({ name: 'Active Category', is_active: true });
        category.deactivate();
        expect(category.is_active).toBeFalsy();
    });

    test('toJSON method', () => {
        const category = new Category({
            category_id: '456',
            name: 'Documentary',
            description: 'Documentary category',
            is_active: true,
            created_at: new Date('2024-02-01'),
        });

        const json = category.toJSON();
        expect(json).toEqual({
            category_id: '456',
            name: 'Documentary',
            description: 'Documentary category',
            is_active: true,
            created_at: new Date('2024-02-01'),
        });
    });
});