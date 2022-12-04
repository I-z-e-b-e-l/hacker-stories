import * as React from 'react';

  const initialStories = [
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

function App() {
  
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

  const [stories, setStories] = React.useState(initialStories)

  const handleRemoveStory = item => {
    const newStories = stories.filter(
      story => item.id !== story.id
    );

    setStories(newStories)
  }


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
      <List list={searchedStories} title="React Ecosystem" key={stories.id} onRemoveItem={handleRemoveStory}/>
      <List list={javascriptLibraries} title="JS Libraries" key={javascriptLibraries.id}/>

      <InputWithLabel 
        id = "search"
        value = {searchTerm}
        onInputChange = {handleSearch}
        isFocused
      >
        <strong>Searching for: </strong>
      </InputWithLabel>
      <hr />
    </div>
  );
};


const InputWithLabel = ({id, value, type="text", onInputChange, isFocused, children }) => {
  const inputRef = React.useRef();
  React.useEffect(()=> {
    if (isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <React.Fragment>
      <label htmlFor={id}> {children} </label>
      <input 
        ref={inputRef}
        id= {id}
        type={type}
        value={value} 
        onChange={onInputChange}
      />
    </React.Fragment>
  );
};



function List({list, onRemoveItem}){
  return (
      <ul>
        {list.map((librarystory) => (
          <Item 
            key={librarystory.id} 
            arrayitem={librarystory} 
            onRemoveItem={onRemoveItem}  
          />
        ))}
      </ul>
  );
}

const Item = ({arrayitem, onRemoveItem}) => {
  return(
    <li>
    {/* link does not work? */}
      <a href='{arrayitem.url}'>{arrayitem.title}</a>
      <p>Number of comments: {arrayitem.num_comments}</p>
      <button type="button" onClick={()=>onRemoveItem(arrayitem)}>
        Remove
      </button>
    </li>
  )
}



export default App;



// npx create-react-app . --template minimal
//api.thecatapi.com

