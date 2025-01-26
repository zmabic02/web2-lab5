<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Page you searched doeesn't exist.</p>
      <router-link to="/home">Home page</router-link>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 5rem;
  }
  
  .not-found h1 {
    font-size: 5rem;
    color: #ff6b6b;
  }
  
  .not-found p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  
  .not-found a {
    font-size: 1rem;
    color: #007bff;
    text-decoration: none;
  }
  
  .not-found a:hover {
    text-decoration: underline;
  }
  </style>
  