import React, { FC, SetStateAction } from "react";
import { useAppDispatch } from "../hooks/redux";
import { ICrypto } from "../models/ICrypto";

type Props = {
  page: number;
  setPage: React.Dispatch<SetStateAction<number>>;
};

const Pagination: FC<Props> = ({ page, setPage }) => {
  const handleNextClick = () => {
    setPage((prevpage) => prevpage + 1);
  };

  const handlePreviousClick = () => {
    setPage((prevpage) => prevpage - 1);
  };

  return (
    <div className="pagination">
      <button
        className="pagination__btn"
        disabled={page === 1}
        onClick={handlePreviousClick}
      >
        {"<"}
      </button>
      <p className="pagination__p">{page}</p>
      <button
        className="pagination__btn"
        disabled={page === 4}
        onClick={handleNextClick}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
