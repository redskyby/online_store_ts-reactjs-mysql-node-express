import React from 'react';
import {Pagination} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../redux";
const PaginationInPage = () => {

    const page = useSelector((state: RootState) => state.isPaginationToolkit.page)

    const pages: number[] = [1, 2, 3, 4, 5]

    console.log(page);
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