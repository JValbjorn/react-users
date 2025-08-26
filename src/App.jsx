import { useEffect, useState } from "react";
import User from "./components/User";
import Header from "./components/Header";
import UserList from "./UserList";
import Footer from "./Footer";
import AppInfo from "./AppInfo";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json");
      const data = await response.json();

      setUsers(data);
    }
    fetchUsers();
  }, []);

   useEffect(() => {
  if (users.length === 0) alert("Ingen brugere!");
}, [users]);

//Destructuring means to un-pack the values from an array or properties from an object into distinct variables.

  return (
    <div className="page">
      <h1>Users</h1>
      <section className="grid">
        {users.map(user => (
          <User user={user} />
        ))}
      </section>
      <AppInfo users={users} />
    </div>
  );
}

export default App;
