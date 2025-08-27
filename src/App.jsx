import { useEffect, useState } from "react";
import User from "./components/User";
import AppInfo from "./AppInfo";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
      );
      const data = await response.json();

      setUsers(data);
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length === 0) alert("Ingen brugere!");
  }, [users]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      id: crypto.randomUUID(),
      name: form.name.value,
      mail: form.mail.value,
      title: form.title.value,
      image: form.image.value,
      age: form.age.value,
    };
    setUsers([...users, newUser]);
    form.reset();
  }

  function handleDeleteUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  //Destructuring means to un-pack the values from an array or properties from an object into distinct variables.

  return (
    <div className="page">
      <h1>Users</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Navn" />
        <input name="mail" placeholder="Mail" />
        <input name="title" placeholder="Titel" />
        <input name="image" placeholder="Billede-URL" />
        <input name="age" placeholder="Alder" />
        <button type="submit">Tilføj bruger</button>
      </form>
      <section className="grid">
        <UserList users={users} handleDeleteUser={handleDeleteUser} />
      </section>
      <AppInfo users={users} />
    </div>
  );
}

export default App;
