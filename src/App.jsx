import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <div className=" w-[23rem] md:w-[30rem] lg:w-[35rem] m-auto mt-10 flex flex-col gap-5">
        <TodoInput />
        <TodoList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
