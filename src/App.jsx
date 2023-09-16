import { useState } from 'react';
import data from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];
  /*MY APPROACH*/
  // const [randomIndex, setRandomIndex] = useState();
  // const nextReview = () => {
  //   if (index < data.length - 1) {
  //     setIndex((prevIndex) => {
  //       return prevIndex + 1;
  //     })
  //   } else {
  //     setIndex(0);
  //   }
  // }
  // const prevReview = () => {
  //   if (index > 0) {
  //     setIndex((prevIndex) => {
  //       return prevIndex - 1;
  //     })
  //   } else {
  //     setIndex(data.length - 1);
  //   }
  // }

  // const randomUser = () => {
  //   let tempIndex = Math.floor(Math.random() * ((data.length - 1) - 0 + 1) + 0);
  //   // console.log(randomIndex);
  //   if(tempIndex !== randomIndex){
  //     setRandomIndex(tempIndex);
  //     setIndex(tempIndex);
  //   }else{
  //     randomUser();
  //   }
  // }

  /*MODULE % APPROACH*/
  const nextReview = () => {
    setIndex((prevIndex) => {
      return (prevIndex + 1) % data.length;
    })
  }
  const prevReview = () => {
    setIndex((prevIndex) => {
      return (prevIndex - 1 + data.length) % data.length;
    })
  }
  /*END MODULE % APPROACH*/

  const randomUser = () => {
    let tempIndex = Math.floor(Math.random() * ((data.length - 1) - 0 + 1) + 0);
    if(tempIndex !== index){
      setIndex(tempIndex);
    }else{
      randomUser();
    }
  }

  return (
    <>
      <main>
        <article className="review" key={id}>
          <div className="img-container">
            <img src={image} alt={name} className='person-img' />
            <span className="quote-icon">
              <FaQuoteRight className='quote-right' />
            </span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className="btn-container">
            <button type="button" className='prev-btn' onClick={prevReview}><FaChevronLeft /></button>
            <button type="button" className='next-btn' onClick={nextReview}><FaChevronRight /></button>
          </div>
          <button type="button" className='btn btn-hipster' onClick={randomUser}>Random Review</button>
        </article>
      </main>
    </>
  )
};
export default App;
