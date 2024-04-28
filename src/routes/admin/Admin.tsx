import React, { useState } from "react";

interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  role: string;
}
const Admin: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const handleRegister = (
    name: string,
    username: string,
    password: string,
    role: string
  ) => {
    const newUser: User = {
      id: String(users.length + 1),
      name,
      username,
      password,
      role,
    };
    setUsers([...users, newUser]);
  };

  const handleLogin = (username: string, password: string) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setLoggedInUser(user);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      {!loggedInUser ? (
        <div>
          <h1>Register</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const name = formData.get("name") as string;
              const username = formData.get("username") as string;
              const password = formData.get("password") as string;
              const role = formData.get("role") as string;
              handleRegister(name, username, password, role);
            }}
          >
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <select name="role">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit">Register</button>
          </form>

          <h1>Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const username = formData.get("username") as string;
              const password = formData.get("password") as string;
              handleLogin(username, password);
            }}
          >
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Welcome, {loggedInUser.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Admin;
