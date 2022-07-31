function Todo({todo,index,remove}) {
    function handle() {
        remove(index);
    }
    return  <div className="todo" key={index} id={index} 
    onClick={handle}>{index + 1} - {todo.text} (-) </div>

}