import React from 'react';
import {Pagination} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux";
import {SET_PAGINATION_PAGE} from "../redux/slice/paginationSlice";

const PaginationInPage = () => {

    const totalCount: number = useSelector((state: RootState) => state.isPaginationToolkit.totalCount);
    const limit: number = useSelector((state: RootState) => state.isPaginationToolkit.limit);
    const pageFromRedux: number = useSelector((state: RootState) => state.isPaginationToolkit.page);
    const dispatch = useDispatch();

    const pageCount = Math.ceil(totalCount / limit);

    let pages: number[] = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    return (
        <Pagination className={'mt-3'}>
            {
                pages.map(page =>
                    <Pagination.Item
                        key={page}
                        active={pageFromRedux === page}
                        onClick={() => dispatch(SET_PAGINATION_PAGE(page))}
                    >
                        {page}
                    </Pagination.Item>
                )
            }
        </Pagination>
    );
};

export default PaginationInPage;