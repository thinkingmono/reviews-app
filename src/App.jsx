import { useState } from 'react';
import data from './data';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];
  const nextReview = () => {
    if (index < data.length - 1) {
      setIndex((prevIndex) => {
        return prevIndex + 1;
      })
    } else {
      setIndex(0);
    }
  }
  const prevReview = () => {
    if (index > 0) {
      setIndex((prevIndex) => {
        return prevIndex - 1;
      })
    } else {
      setIndex(data.length - 1);
    }
  }

  const randomUser = () => {
    const randomIndex = Math.floor(Math.random()* ((data.length - 1) - 0 + 1) + 0);
    console.log(randomIndex);
    setIndex(randomIndex);
  }
  return (
    <>
      <main>
        <div className="review" key={id}>
          <div className="img-container">
            <img src={image} alt={name} className='person-img' />
            <div className="quote-icon">
              <FaQuoteRight className='quote-right' />
            </div>
          </div>
          <div className="info">
            <h4 className='author'>{name}</h4>
            <h5 className='job'>{job}</h5>
            <p>{text}</p>
          </div>
          <div className="btn-container">
            <button type="button" className='prev-btn' onClick={prevReview}><FaChevronLeft /></button>
            <button type="button" className='next-btn' onClick={nextReview}><FaChevronRight /></button>
          </div>
          <button type="button" className='btn' onClick={randomUser}>Random Review</button>
        </div>
      </main>
    </>
  )
};
export default App;
