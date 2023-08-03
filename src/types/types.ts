export type RecipeCardProps = {
  _id: string,
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
  name: string,
  url?: string
}

export type RecipeChefProps = {
  name: string,
  imageUrl?: string
}

export type RecipeDescriptionProps = {
  text: string,
}

export type StarRatingProps = {
  rating: number,
  handleRatingChange: (e:any) => void
}

export type FormDataProps = {
  rating: number,
  review?: string
}