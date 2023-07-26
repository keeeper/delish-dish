export type RecipeCardProps = {
  id: string,
  title: string,
  photo?: RecipeCardPhotoProps
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
  description?: string,
  photo?: RecipePhotoProps,
  tags?: [],
  chef?: string
}

export type RecipePhotoProps = {
  url?: string,
  title?: string
}

export type RecipeTagProps = {
  name: string | undefined
}

export type RecipeChefProps = {
  name: string | undefined,
  imageUrl?: string
}

export type RecipeDescriptionfProps = {
  text: string | undefined,
}

export type StarRatingProps = {
  rating: number,
  handleRatingChange: (e:any) => void
}

export type FormDataProps = {
  rating: number,
  review?: string
}