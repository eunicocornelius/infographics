import React, { useState, useEffect } from "react";
import "./App.css";
import personalData from "./personal_data.json";
import { Grid } from "@material-ui/core";
import PplCard from "./components/PplCard";
import Eye from "./components/Eye";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //async function to fetch data from API
    async function fetchData() {
      setUsers(
        //await helps for getting the data first before continuing to next process the page
        await fetch("https://reqres.in/api/users?page=2")
          .then((res) => res.json())
          .then((res) => res.data)
          .catch((err) => console.log(err, "Fetch Warning!!"))
      );
    }
    fetchData();
  }, []);

  return (
    <div className='App'>
      <h3>Responsive Material UI Layout</h3>

      <Grid container spacing={10} style={{ padding: "24px" }}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3} justify='center'>
          <div className='edu_title'>EDUCATION</div>
          <div className='eye_container'>
            <Eye />
          </div>
        </Grid>
        {users.map((user) => (
          <Grid key={user.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <PplCard
              key={user.id}
              email={user.email}
              firstname={user.first_name}
              lastname={user.last_name}
              avatar={user.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
