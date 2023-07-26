export const createRecipeImages = (data: any) => {
  return data.includes.Asset.reduce((acc:{}, item: any) => {
    return {
      ...acc, 
      [item.sys.id]: {title: item.fields.file.fileName,
      url: `https:${item.fields.file.url}`}
    }
  }, {});
}

export const createRecipesArray = (data: any) => {
  const photoData = createRecipeImages(data);

  return data.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    photo: photoData[item.fields.photo.sys.id],
  }));
}

export const getRecipeTags = (entries: any) => {
  return entries?.filter((item: any) => item.sys.contentType.sys.id === "tag");
}

export const getRecipeChefName = (entries: any) => {
  const chef = entries?.find((item: any) => item.sys.contentType.sys.id === "chef");
  return chef?.fields?.name;
}

export const getRecipeData = (data: any) => {
  return {
    title: data.items[0]?.fields?.title,
    description: data?.items[0]?.fields?.description,
    photo: {
      url: `https:${data?.includes?.Asset[0]?.fields.file.url}`,
      title: data?.includes?.Asset[0].fields.title
    },
    tags: getRecipeTags(data.includes.Entry),
    chef: getRecipeChefName(data.includes.Entry)
  } 
}
