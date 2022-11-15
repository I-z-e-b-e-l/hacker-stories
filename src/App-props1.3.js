import * as React from 'react';



function List(props){
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.list.map(function(librarystory){
          return(<Item arrayitem={librarystory} />);
        })}
      </ul>
    </div>
  );
}

// a few different ways to write this in 1.3 "React Props"


const Item = (props) => {
  const item=props.arrayitem;

  return (
    <li key={item.objectID}>
    {/* link does not work? */}
      <a href='{item.url}'>{item.title}</a>
      <p>Number of comments: {item.num_comments}</p>
    </li>
  );
}

function Search(){

  // insert handler functions here:

  const handleChange = (event) => {
    // console.logs individual letters typed in
    console.log(event.nativeEvent.data)
    console.log(event)
  }

  const handleMouseOver = (event) => {
    console.log(event)
  }

  return(
    <div>
      <label htmlFor='search'>Search:</label>
      <input id="search" type='text' onChange={handleChange} onMouseOver={handleMouseOver}/>
    </div>
  )
}


function App() {

  const stories = [
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
  ];

  const javascriptLibraries = [
    {
      title: 'JQuery',
      url: 'https://jquery.org',
      num_comments: 444,
      objectID: 0
    },
    {
      title: 'Angular',
      url: 'httsp://angularjs.org',
      num_comments: 233,
      objectID: 4
    }
  ];

  return (
    <div>
      <h1>My Hacker Stories</h1>
      
      <List list={stories} title="React Ecosystem" />
      <List list={javascriptLibraries} title="JS Libraries" />
      <Search />
      <hr />
    </div>
  );
};

export default App;
