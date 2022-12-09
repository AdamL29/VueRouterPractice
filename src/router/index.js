import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuPage from '@/views/MenuPage'; // Or '@/views/MenuPage.vue';
import ContactPage from '@/views/ContactPage';
import ReservationPage from '@/views/ReservationPage';

Vue.use(VueRouter)

const routes = [
  // This section creates the path names that match the router-link tags.
  {
    path: "/",
    component : MenuPage,
    meta : [
      {
        title : 'Our Menu'
        // The new page title with meta information
      },
      // Below is the meta information
      {
        name : "description",
        content: "Enjoy our italian style pizza selection"
      },
      {
        name : "Author",
        content : "Timothy"
      }
    ]
  },
  {
    path : "/contact-us",
    component : ContactPage,
    meta : [
      {
        title : 'Call Us'
      },
      {
        name : "description",
        content: "Call us 24/7"
      },
      {
        name : "Author",
        content : "Timothy"
      }
    ]
  },
  {
    path : '/reservations',
    component : ReservationPage,
    meta : [
      {
        title : 'Make Reservations'
      },
      {
        name : "description",
        content: "Make a reservation for your next visit"
      },
      {
        name : "Author",
        content : "Timothy"
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  // Get all Meta tags
  let metaTags = document.querySelectorAll('meta');

  // Loop through the tags and remove each.
  for (let tag of metaTags){
    tag.remove ();
  }
  let newTags = to.meta;
  // Assign local variable and then place as innerText
  document.querySelector('title').innerText = newTags[0].title; //.title used to title the page
  
  for (let i=1; i<newTags.length; i++){
    document.querySelector('head').insertAdjacentHTML(`afterbegin`,
          `<meta name="${newTags[i].name}" content="${newTags[i].content}">`)
  }
// This 
// This is how to add the html meta tags needed!
  document.querySelectorA(`head`).insertAdjacentHTML(`afterbegin`,`
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
`)
  to;
  from;
  next();
})

export default router
