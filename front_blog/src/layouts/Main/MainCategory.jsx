import {FormSearch} from "@components/Form/FormSearch.jsx";
import {CardCategory} from "@ui/Card/CardCategory.jsx";


export const MainCategory = () => {
    const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    return (
        <main className="container mx-auto mt-10">
            <FormSearch/>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mt-8">
                {categories.map((category, index) => {
                    return (
                        <CardCategory key={index}/>
                    )
                })}
            </div>
        </main>
    )
}