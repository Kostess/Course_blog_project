import {CardPost} from "@ui/Card/Card.jsx";
import ReactPaginate from "react-paginate";
import {useState} from "react";

export const PostGroupPagination = () => {

    const posts = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 8;
    const pageCount = Math.ceil(posts.length / postsPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const getCurrentPosts = () => {
        const startIndex = currentPage * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        return posts.slice(startIndex, endIndex);
    };

    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-8">
                {getCurrentPosts().map((post, index) => {
                    return (
                        <CardPost key={index}/>
                    )
                })}
            </div>
            <div className="mt-20 flex justify-center">
                <ReactPaginate
                    previousLabel={'Предыдущая'}
                    nextLabel={'Следующая'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={'flex space-x-2'}
                    pageLinkClassName={'block px-4 py-2 rounded-lg bg-main-green text-white hover:bg-main-dark-green transition-colors duration-300'}
                    activeLinkClassName={'bg-main-dark-green'}
                    previousLinkClassName={'block px-4 py-2 rounded-lg bg-main-green text-white hover:bg-main-dark-green transition-colors duration-300'}
                    nextLinkClassName={'block px-4 py-2 rounded-lg bg-main-green text-white hover:bg-main-dark-green transition-colors duration-300'}
                    breakLinkClassName={'block px-4 py-2 rounded-lg bg-main-green text-white hover:bg-main-dark-green transition-colors duration-300'}
                    disabledLinkClassName={'opacity-50 cursor-not-allowed bg-main-dark-green'}
                />
            </div>
        </>
    )
}