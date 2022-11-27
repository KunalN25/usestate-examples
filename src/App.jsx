import Counter from "./components/Counter";
import FormHandling from "./components/FormHandling/FormHandling";
import MultipleTables from "./components/ContionalRendering/MultipleTables";
import UserAdmin from "./components/ContionalRendering/UserAdmin";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
        {/* <UserAdmin/> */}
        {/* <MultipleTables/> */}
        {/* <Counter/> */}
        {/* <FormHandling/> */}
        <TodoList/>
    </div>
  );
}

export default App;
