const toggleComplete =(id)=>{
    console.log("toggle is working");
    setTodos((prevList) => prevList.map((todo) => todo.id ==id ? {...todo , isFinished : !todo.isFinished} : todo))
  }