export default defineNuxtRouteMiddleware((to, from) => {
  // Check if the user is authenticated
  if (!localStorage.getItem('token')) {
    // If not, redirect to the login page
    return navigateTo('/login');
  }
});
