import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleCheck, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faTrash, faCircleCheck,)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
