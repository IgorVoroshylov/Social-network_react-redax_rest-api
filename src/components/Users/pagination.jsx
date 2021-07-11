import React, { useState } from 'react'
import styles from './users.module.css'

const Pagination = (props) => {
   let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
   let pages = [];
   for(let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   const portionSize = 10;
   let portionCount = Math.ceil(pagesCount / portionSize);
   const [portionNumber, setportionNumber] = useState(1);
   const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
   const rightPortionNumber = portionNumber * portionSize;

   return <div>
      <div className={styles.pagination}>
         { portionNumber > 1 && <button onClick={ () => {setportionNumber(portionNumber - 1)} }>Prev</button> }
         {
            pages
            .filter(p => (p >= leftPortionNumber) && (p <= rightPortionNumber))
            .map(p => {
               return <span key={p} className={ props.currentPage === p ? styles.selectedPage : null }
                  onClick={() => {
                     props.onPageChenged(p);
                  }}>{p}</span>
            })
         }
         { portionCount > portionNumber && <button onClick={ () => {setportionNumber(portionNumber + 1)} }>Next</button> }
      </div>
   </div>
}

export default Pagination;