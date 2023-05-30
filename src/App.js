import React, {useState} from "react";
import {AiOutlinePlus} from "react-icons/ai"
import Todo from "./Todo";

const style = {
  bg: `h-screen w-screeen p-4 bg-gradient-to-r from-[#1f4037] to-[#99f2c8]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center  text-gray-800 p-0.5 my-5`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl rounded-md `,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100 rounded-md`,
  count: `text-center p-2`
};


function App() {
const [todos, setTodos] = useState(['Learn React', 'Great Leetcde'])

  return <div className={style.bg}>
    <div className={style.container}>
      <h3 className={style.heading}>Todo App</h3>
      <form action="" className={style.form}>
        <input className={style.input} type="text" placeholder="Add Todo" />
        <button className={style.button}><AiOutlinePlus size={30}/></button>
      </form>
      <ul>
      {todos.map((todo, index)=> (
    <Todo key={index} todo={todo}/>
      ))}
      </ul>
      <p className={style.count}>You Have 2 todos</p>
    </div>
  </div>;
}

export default App;
