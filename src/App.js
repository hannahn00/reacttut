//creates a component, reusable code that reps a part of user interface (used to manage, render update UI elements)
//child component 
function Square() {
  return <button className="square">1</button>;
}





//defines function called Square, 'export' makes function accessible outside this file
//'default' tells other files using this code that this function is the main one in this file
//parent component 
export default function Board() {  
  //return makes a button thats returned as value to caller
  return (
    <>
      <div className = "board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className = "board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className = "board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
  
}

