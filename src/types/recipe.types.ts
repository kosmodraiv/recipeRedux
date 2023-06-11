export interface IRecipe {
    id: number
    name: string
    image: string
    recipe: string
    order: string
}

export interface IRecipeData extends Omit<IRecipe, 'id'> {}
