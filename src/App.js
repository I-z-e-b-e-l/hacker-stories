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


  //I'm just slightly confised about key
  // and there's a warning:  "React Hook React.useEffect has a missing dependency: 'key'. Either include it or remove the dependency array"
  const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = React.useState(localStorage.getItem(key)||initialState)

    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [value] );

    return [value, setValue];
  }

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  //filter
  const searchedStories = stories.filter(function (story){
    return story.title.toLowerCase().includes(searchTerm.toLowerCase())
  });


  return (
    <div>
      <h1>My Hacker Stories</h1>
      <List list={searchedStories} title="React Ecosystem" key={stories.id}/>
      <List list={javascriptLibraries} title="JS Libraries" key={javascriptLibraries.id}/>
      {/* <Search search={searchTerm} onSearch={handleSearch} /> */}

      <InputWithLabel 
        id = "search"
        // label = "search"
        value = {searchTerm}
        onInputChange = {handleSearch}
      >
        <strong>Search: </strong>
      </InputWithLabel>
      {/* <p>Searching for: {search}</p> */}
      <hr />
    </div>
  );
};


const InputWithLabel = ({id, value, type="text", onInputChange, children }) =>(
  <React.Fragment>
  <label htmlFor={id}> {children} </label>
  <input 
    id= {id}
    type={type}
    value={value} 
    onChange={onInputChange}
  />
  </React.Fragment>

)

function List({list}){
  return (
      <ul>
        {list.map((librarystory) => (
          <Item key={librarystory.id} arrayitem={librarystory} />
        ))}
      </ul>
  );
}

const Item = ({arrayitem}) => {
  return(
    <li>
    {/* link does not work? */}
      <a href='{arrayitem.url}'>{arrayitem.title}</a>
      <p>Number of comments: {arrayitem.num_comments}</p>
    </li>
  )
}

// function Search({ search, onSearch}){

//   return(
//     <div>
//       <label htmlFor='search'>Search: </label>
//       <input 
//         id="search" 
//         type='text'
//         value={search} 
//         onChange={onSearch}
//       />

//       <p>Searching for: {search}</p>
//     </div>
//   )
// }




export default App;



// npx create-react-app . --template minimal
//api.thecatapi.com

