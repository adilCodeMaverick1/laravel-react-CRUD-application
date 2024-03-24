import React, { useEffect, useState } from "react";
import http from "../http";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      setUsers(res.data);
    });
  };

  return (
    <div>
      <h1>All Records</h1>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
   {users.map((user,index)=>(
    <tr key={user.id}>
        <td>{++index}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>edit</td>


    </tr>
   )
   
   
   )}
   
  </tbody>
</table>
    </div>
  );
}
