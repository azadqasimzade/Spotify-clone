import categories from "../../data/categories"
import Category from "../Category"
import Title from "../Title/Title"

const Search = () => {
  return (
      <div className="mt-10">
        <Title title={'Browse all'}/>
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-5">
          {categories.map(category => <Category category={category} key={category.id}/>)}
        </div>
      </div>
  )
}

export default Search