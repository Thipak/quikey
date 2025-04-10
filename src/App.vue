<script setup>
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/signup">Sign-up</router-link></li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <body>

  </body>
</template>
