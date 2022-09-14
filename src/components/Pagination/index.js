import React from "react";
import './styles.css';

import ArrowLeft from '../../assets/images/arrow-left.png'
import ArrowRight from '../../assets/images/arrow-right.png'

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export default function Pagination({limit, total, offset, setOffset}) {
    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
    const first = Math.min(
        Math.max(current - MAX_LEFT, 1),
        maxFirst
      );

    function onPageChange(page) {
        setOffset((page - 1) * limit);
    }

    return (
        <ul className="pagination">
            <li>
                <button 
                    onClick={() => onPageChange(current - 1)}
                    disabled={current === 1}
                    className="button-lr"
                >
                    <img src={ArrowLeft} width="30" height="30"/>
                </button>
            </li>
            {Array.from({length: Math.min(MAX_ITEMS, pages)})
                .map((_, index) => index + first)
                .map((page) => (
                    <li key={page}>
                        <button 
                            onClick={() => onPageChange(page)}
                            className={page === current ? 'pagination__item--active' : 'pagination-item'}
                        >{page}</button>
                    </li>
                ))
            }
            <li>
                <button 
                    onClick={() => onPageChange(current + 1)}
                    disabled={current === pages}
                    className="button-lr"
                >
                    <img src={ArrowRight} width="30" height="30"/>
                </button>
            </li>
        </ul>
    );
}