export type RecipeCardProps = {
  id: string,
  title: string,
  photo: RecipeCardPhotoProps
}

export type RecipeCardPhotoProps = {
  url: string,
  title: string,
}

export type RecipeParams = {
  id: string
}

export type RecipeProps = {
  title: string,
  description: string,
  photo: RecipePhotoProps,
  tags: [],
  chef: string
}

export type RecipePhotoProps = {
  url: string,
  title: string
}