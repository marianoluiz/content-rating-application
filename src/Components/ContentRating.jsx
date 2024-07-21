import React, { Component } from 'react';
import '../styles/index.css';
import '../styles/ContentRating.css';

class ContentRating extends Component {
  constructor(props) {
    super(props);
    // Initialize state with an array of card states
    this.state = {
      cards: [
        { likes: 0, dislikes: 0, contentRatings: 0, name: 'John Strong' },
        { likes: 0, dislikes: 0, contentRatings: 0, name: 'Big Chungus' },
        { likes: 0, dislikes: 0, contentRatings: 0, name: "Shaquille o'Meal" },
        { likes: 0, dislikes: 0, contentRatings: 0, name: 'Vim Otawa' },
        { likes: 0, dislikes: 0, contentRatings: 0, name: 'Little Timmy' },
        { likes: 0, dislikes: 0, contentRatings: 0, name: 'David Goggins' }
      ]
    };
  }

  // Update the like count for a specific card
  handleLike = (index) => {
    console.log(`Like button clicked for index: ${index}`);
    this.setState( (prevState) => { //prevState as parameter of the callback
      const newCards = [...prevState.cards];
      newCards[index].likes += 1;

      const totalInteractions = (newCards[index].likes + newCards[index].dislikes);
        /* converts to float using parseFloat then string using toFixed() */
      newCards[index].contentRatings = parseFloat(
        (newCards[index].likes / totalInteractions) * 5).toFixed(2);

      return { cards: newCards };
    });
  };

  // Update the dislike count for a specific card
  handleDislike = (index) => {
    this.setState( (prevState) => { //prevState as parameter of the callback
      const newCards = [...prevState.cards];
      newCards[index].dislikes += 1;

        /* converts to float using parseFloat then string using toFixed() */

      const totalInteractions = (newCards[index].likes + newCards[index].dislikes);

      newCards[index].contentRatings = parseFloat(
        (newCards[index].likes / totalInteractions) * 5).toFixed(2);
        
      return { cards: newCards };
    });
  };

  render() {
    return (
      <>
        <div className="body">
          <div className='content-rating'>

            {/* map function is called corresponds to the number of objects (or elements) in the array. */} 
            {/* it applies the callback function to each element in the array (which is in the state) */}
            {/* so there would be 6 copies of this div */}

            {/* array.map(function(currentValue, index, arr), thisValue) */}
            
            {this.state.cards.map((card, index) => ( /* it can also be return { ... } not () */
              <div key={index} className={`card card-${index + 1}`}>
                <div className='image'>
                  <img src={`https://picsum.photos/300/200?random=${index + 1}`} alt="Image Placeholder" />
                </div>
                <div className='desc'>
                  <p className='title'>Image Description</p>
                  <p className='sub'>Posted by {card.name}</p>
                </div>
                <div className='options'>
                  <div className='rating-buttons'>
                    <button className='like-button button' onClick={() => this.handleLike(index)}>
                      Like: ({card.likes})
                    </button>
                    <button className='dislike-button button' onClick={() => this.handleDislike(index)}>
                      Dislike: ({card.dislikes})
                    </button>
                  </div>
                  <div className='total-rating'>Ratings: ({card.contentRatings})</div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
