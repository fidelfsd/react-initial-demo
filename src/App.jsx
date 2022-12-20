import "./App.css";
import { Person } from "./components/Person/Person";
import SayHello from "./components/SayHello/SayHello";
import { List } from "./components/List/List";
import { Contador } from "./components/Contador/Contador";

const list = [
   {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
   },
   {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
   },
];

function App() {
   let isLoading = true;
   let isTitle = true;
   return (
      <div className="App">
         {isTitle && <h1>React components</h1>}

         {isLoading ? (
            <div>
               <p>Loading...</p>
            </div>
         ) : (
            <div>
               <p>Data ready</p>
            </div>
         )}

         <hr />
         <SayHello title="Geeks" name="Bob" age={22} />
         <SayHello title="React" name="Alice" age={32} />
         <hr />
         <h2>Componente Person</h2>
         <Person name="Alice" surname="Geek" age={22} />
         <Person name="Bob" surname="Geek" age={33} />
         <Person name="Jhon" surname="Doe" age={44} />
         <hr />
         <h2>Listas</h2>

         <List list={list} />
         <hr />

         <h2>Contador</h2>
         <Contador />
      </div>
   );
}

export default App;
