import { ToolbarPost } from "@components/ToolbarPost/ToolbarPost.jsx";
import {PostGroupPagination} from "@components/PostGroupPagination/PostGroupPagination.jsx";

export const Main = () => {

    return (
        <main className="container mx-auto mt-10">
            <ToolbarPost />
            <PostGroupPagination/>
        </main>
    )
}