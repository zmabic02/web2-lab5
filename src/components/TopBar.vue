<template>
    <nav class="top-bar">
      <h1>To-Do App</h1>
      <ul>
        <li>
          <router-link to="/home">Task List</router-link>
        </li>
        <li>
          <router-link to="/add-task">Add Task</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "TopBar",
  };
  </script>
  
  <style scoped>
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #282c34;
    padding: 10px 20px;
    color: white;
    margin: 0;
  }
  
  .top-bar h1 {
    margin: 0;
    font-size: 24px;
  }
  
  .top-bar ul {
    list-style: none;
    display: flex;
    gap: 15px;
    padding: 0;
    margin: 0;
  }
  
  .top-bar ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .top-bar ul li a:hover {
    text-decoration: underline;
  }
  </style>
  