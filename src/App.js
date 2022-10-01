import './App.css';
import List2 from './List_solution';
import List from './List_optimized';

function App() {
  const items = [
    {
      text: "hello1",
      },{
        text: "hello2",
        },{
          text: "hello3",
          },{
            text: "hello4",
            },{
              text: "hello5",
              },
]
  return (
    <>
    <List2 items={items} />    {/* List component from list solution file */}
    <List items = {items}/>     {/* List component from  optimized file */}
    </>
  );
}

export default App;
