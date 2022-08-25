import categories from "../../data/categories"
import Category from "../Category"
import Title from "../Title/Title"

const Search = () => {
  return (
      <div className="mt-10">
        <Title title={'Browse all'}/>
        <div className="grid grid-cols-6 gap-6 mt-5">
          {categories.map(category => <Category category={category} key={category.id}/>)}
        </div>
      </div>
  )
}

export default Search