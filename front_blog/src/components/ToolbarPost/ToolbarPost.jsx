import {FormSearch} from "@components/Form/FormSearch.jsx";
import {FormFilter} from "@components/Form/FormFilter.jsx";
import {Select} from "@ui/Select/Select.jsx";

export const ToolbarPost = () => {
    return (
        <div className="flex justify-between items-center">
            <FormSearch/>
            <FormFilter/>
            <div className="max-w-48 w-full">
                <Select title="Сортирока по:"/>
            </div>
        </div>
    )
}