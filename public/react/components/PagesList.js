import React, {useState} from 'react';
import { Page } from './Page';

export const PagesList = ({pages}) => {
  const [selectedPage, setSelectedPage] = useState(null);

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  const handleBackClick = () => {
    setSelectedPage(null);
  };

  if (selectedPage) {
    return (
      <Page page={selectedPage} onBack={handleBackClick} />
    );
  }

  return (
    <div>
      {pages.map((page) => (
        <div key={page.title} onClick={() => handlePageClick(page)}>
          <h2>{page.title}</h2>
          <p>{page.content}</p>
        </div>
      ))}
    </div>
  );
};
