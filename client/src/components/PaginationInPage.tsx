import React from 'react';
import {Pagination} from "react-bootstrap";
const PaginationInPage = () => {

    const pages: number[] = [1, 2, 3, 4, 5]

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