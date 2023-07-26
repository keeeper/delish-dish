# Delish Dish
Responsive NextJS app for diplaying recipes. Includes recipes list view which contains all recipes and single recipe view for details of each recipe.

## First run, development server
##### Clone this repo

##### Create `.env` file in the root directory. Add variables with corresponding values there.
```bash
CONTENTFUL_SPACE_KEY={Space ID}
CONTENTFUL_ACCESS_TOKEN={Access Token}
```
##### Install modules
```bash
npm i
```
##### Run dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Possible improvements
- Typescript: avoid use of `any`
- Responsive: add more breakpoints for wider range of devices
- Fix warnings
- User friendly url for single recipe (replace id with slug)
- Add form submission, error handling (API endpoint needed)
- Accessibility improvements
- Tests
- More advanced loaders (skeletons)
- Pure CSS (SASS, SCSS, LESS) instead of Tailwind
