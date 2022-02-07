import Vue from 'vue'
import App from './App.vue'
import router from '@/router/routes.js'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import './assets/styles.scss'
import '../node_modules/animate.css/animate.css'



export const eventBus = new Vue()
Vue.use(VueScrollTo)

VueScrollTo.setDefaults({
    container: "body",
    duration: 1500,
    lazy: false,
    easing: 'linear',
    offset: -205,
    x: false,
    y: true
})

Vue.directive('scroll', {
    inserted: function(el, binding) {
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')