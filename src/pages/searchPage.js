import Search from '../componets/search/search.js';
import ChosenAnime from '../componets/chosenAnime/chosenAnime';
import { useState } from 'react';
import Related from '../componets/related/related';
import Header from '../componets/header/header.js';

function SearchPage() {
  const [current, setCurrent] = useState(null);

  const handleOnSearchChange = (searchData) => {
    setCurrent(searchData.value);
  }
  
  console.log(current);

  return (
    <>
      <Header/>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange}/> 
        <ChosenAnime props={current} />
        <div className='grid'>
            <Related props={current} id={0}/>
            <Related props={current} id={1}/>
            <Related props={current} id={2}/>
        </div>
      </div>
    </>
    
  );
}

export default SearchPage;
