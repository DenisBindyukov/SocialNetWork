import React from 'react';
import style from "./Paginator.module.css";

type PaginatorType = {
    totalCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (value: number) => void
}

export const Paginator: React.FC<PaginatorType> = ({totalCount, pageSize, currentPage, ...props}) => {

    const pageCount = Math.ceil(totalCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <>
            {
                pages.map((p, index) => {
                    return <span
                        key={index}
                        className={` ${currentPage === p && style.page_fatty} ${style.pages_span}`}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })
            }
        </>
    );
}