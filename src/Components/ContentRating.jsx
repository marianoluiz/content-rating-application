
import React, { Component } from 'react';
import './ContentRating.css';

/* Step 1: Setting the initial state */
class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0,
            contentRatings: 0,

            /* Step 2: Event h
            Handling */

            handleLike: () => {
                
                this.setState((prevState) => ({
                    //i was confused here, so this arrow function has enclosed ( ) because it is returning object literal. 

                    //so declaring object literal seperate then returning just the object name is an option as well.

                    likes: prevState.likes + 1,
                    contentRatings: prevState.contentRatings + 1
                }));
                
            },

            handleDislike: () => {
                this.setState((prevState) => ({
                    dislikes: prevState.dislikes + 1,
                    contentRatings: prevState.contentRatings + 1
                }));
            },
        };
    }
    /* Step 4: Call the event handlers */
    render() {
        return(
            <>
            <div className='content-rating'>
                <p>
                    React Content Rating Application
                </p>
                
                <div className='rating-buttons'>
                    <button className='like-button' onClick={this.state.handleLike}>
                        Like: ({this.state.likes})
                    </button>
                    <button className='dislike-button' onClick = {this.state.handleDislike}>
                        Dislike: ({this.state.dislikes})
                    </button>

                    <p>Total Ratings: ({this.state.contentRatings})</p>
                </div>
            </div>
            </>
        )
    }
}

export default ContentRating;
