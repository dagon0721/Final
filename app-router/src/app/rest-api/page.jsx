"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function RestApi() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching data.", error);
      } finally {
        setLoading(false); //로딩 완료
      }
    };
    fetchUsers();
  }, []); // 컴포넌트가 마운트 될때만 실행

  if (loading) return <h1>Loading ...</h1>;
  if (!users.length) return <h1>No Users Found</h1>; // 빈 배열일 경우 메시지 표시

  console.log(users);

  return (
    <>
      <h1>axios</h1>
      {users.map((user, id) => {
        return (
          <div key={id}>
            <h2>{user.id}</h2>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.address.geo.lat}</h3>
          </div>
        );
      })}
    </>
  );
}
