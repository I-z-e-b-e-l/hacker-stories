import * as React from 'react';

function App() {
  
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      num_comments: 345,
      id: 1
    },
    {
      title: 'Redux',
      url: 'httsp://redux.js.org',
      num_comments: 233,
      id: 2
    }
  ];

  const javascriptLibraries = [
    {
      title: 'JQuery',
      url: 'https://jquery.org',
      num_comments: 444,
      id: 0
    },
    {
      title: 'Angular',
      url: 'httsp://angularjs.org',
      num_comments: 233,
      id: 4
    }
  ];

  const [searchTerm, setSearchTerm] = React.useState("anything you type above");

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  //filter
  const searchedStories = stories.filter(function (story){
    return story.title.toLowerCase().includes(searchTerm)
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>
      {/*This list now inlcudes only the filtered searchedStories, rather than stories*/}
      <List list={searchedStories} title="React Ecosystem" key={stories.id}/>
      <List list={javascriptLibraries} title="JS Libraries" key={javascriptLibraries.id}/>
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <hr />
    </div>
  );
};


function List(props){
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        {props.list.map(function(librarystory){
          return(<Item arrayitem={librarystory} key={librarystory.id}/>);
        })}
      </ul>
    </div>
  );
}

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

function Search(props){

  // const [searchTerm, setSearchTerm] = React.useState("anything you type above"); - moved up to App: lifting state

  const handleChange = (event) => {

    // setSearchTerm(event.target.value); -removed

    props.onSearch(event);

  }

  return(
    <div>
      <label htmlFor='search'>Search: </label>
      <input id="search" type='text' onChange={handleChange} />

      <p>Searching for: {props.searchTerm}</p>
    </div>
  )
}




export default App;
