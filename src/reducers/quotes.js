export default function quotes(state = [], action) {
  let quote;
  let idx;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
 
    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    
    case "UPVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      quote = state[idx];
      return [
        ...state.slice(0, idx),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(idx + 1)
      ];  

    case "DOWNVOTE_QUOTE":
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      quote = state[idx];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, idx),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(idx + 1)
        ];
      }
      else {return state}

    default:
      return state;
  }
}


// The quotes reducer should have an initial state of:

// ```javascript
// []
// ```

// But when a Quote is added it should look like this
// (we will be using the uuid node package for generating ids):

// ```javascript
// [
//   {
//     id: '23423424242-42342423424242-fafdb',
//     content: 'One Awesome Quote',
//     author: 'Luke Ghenco'
//   }
// ]
// ```

// We will also need to extend out the Quotes Reducer to handle removing quotes,
// upvoting quotes, and downvoting quotes as well. Check out the test specs for how
// to build these.