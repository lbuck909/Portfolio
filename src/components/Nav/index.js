import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({ pages = [], setCurrentPage, currentPage }) {
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <nav>
      <ul className="flex-row">
        {pages.map((page) => (
          <li
            className={`mx-5 ${currentPage.name === page.name && 'navActive'}`}
            key={page.name}
          >
            <span onClick={() =>  setCurrentPage(page)}>
              {capitalizeFirstLetter(page.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
