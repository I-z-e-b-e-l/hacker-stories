import * as React from 'react';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    num_comments: 345,
    objectID: 1
  },
  {
    title: 'Redux',
    url: 'httsp://redux.js.org',
    num_comments: 233,
    objectID: 2
  }
]


function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <ul>
        {list.map(function(item){
          return(
            <li key={item.objectID}>
            {/* link does not work? */}
              <a href='{item.url}'>{item.title}</a>
              <p>Number of comments: {item.num_comments}</p>
            </li>
          );
        })}
      </ul>

      <label htmlFor='search'>Search:</label>
      <input id="search" type='text'/>


    </div>
  );
}

export default App;
