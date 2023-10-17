import React from 'react';
import {Pagination} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../redux";

const PaginationInPage = () => {

    const totalCount: number = useSelector((state: RootState) => state.isPaginationToolkit.totalCount);
    const limit: number = useSelector((state: RootState) => state.isPaginationToolkit.limit);

    const pageCount = Math.ceil(totalCount / limit);

    let pages: number[] = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    return (
        <Pagination className={'mt-3'}>
            {
                pages.map(page =>
                    <Pagination.Item key={page}>{page}</Pagination.Item>
                )
            }
        </Pagination>
    );
};

export default PaginationInPage;