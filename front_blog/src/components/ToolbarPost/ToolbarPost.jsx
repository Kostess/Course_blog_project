import {FormSearch} from "@components/Form/FormSearch.jsx";
import {FormFilter} from "@components/Form/FormFilter.jsx";
import {FormSort} from "@components/Form/FormSort.jsx";

export const ToolbarPost = () => {
    return (
        <div className="flex justify-between items-center">
            <FormSearch/>
            <FormFilter/>
            <FormSort/>
        </div>
    )
}