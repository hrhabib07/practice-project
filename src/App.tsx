import "./App.css";
import User from "./components/user";

function App() {
  return (
    <div>
      <User
        name="Habibur Rahman"
        email="habib@email.com"
        age={22}
        isRegistered={true}
      ></User>
    </div>
  );
}

export default App;
