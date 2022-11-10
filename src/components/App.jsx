import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

 

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function addNote(newItem) {
    setItems(prevItems => {
      return  [...prevItems, newItem]
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {items.map((itemItem, index) => {
        
        return ( 
          <Note 
          key={index} 
          id={index} 
          title={itemItem.title}
          content={itemItem.content}
          onChecked={deleteItem}
        />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
