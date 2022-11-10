import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });


  function handleChange(event) {
    const {name, value} = event.target;
    setInputText(prevInputText => {
      return {
        ...prevInputText,
        [name]: value
      };
    });
  }


  function submitNote(event) {
    props.onAdd(inputText);
    setInputText({
      title: "",
      content: ""
    })
    event.preventDefault();
  }


  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
      {/* same as  */}
      {/* {isExpanded && <input onChange={handleChange} value={inputText.title} name="title" placeholder="Title" />} */}
      {isExpanded ? <input onChange={handleChange} value={inputText.title} name="title" placeholder="Title" /> : null} 
        <textarea onClick={expand} onChange={handleChange} value={inputText.content} name="content" placeholder="Take a note..." rows="isExpanded ? 3 : 1" />
        {/* <button onClick={submitNote}><AddIcon/></button> */}
        <Zoom in={isExpanded && true}>
          <Fab onClick={submitNote} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
