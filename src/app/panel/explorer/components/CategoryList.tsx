import { CategoryItem } from './CategoryItem'

export function CategoryList() {
  return (
    <div className="flex gap-3">
      <CategoryItem value="all" title="Tudo" defaultChecked />
      <CategoryItem value="computation" title="Computação" />
      <CategoryItem value="education" title="Educação" />
      <CategoryItem value="fantasy" title="Fantasia" />
      <CategoryItem value="fiction" title="Ficção científica" />
      <CategoryItem value="horror" title="Horror" />
      <CategoryItem value="hqs" title="HQs" />
      <CategoryItem value="thriller" title="Suspense" />
    </div>
  )
}
