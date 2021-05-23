import Vue from 'vue'
import VueMeta from 'vue-meta'
import { BootstrapVue } from 'bootstrap-vue'
import Multiselect from 'vue-multiselect'
import moment from 'moment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
require('@/bootstrap')
import '../sass/app.scss'

library.add(faEye, faGithub)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueMeta)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('multiselect', Multiselect)

Vue.prototype.moment = moment

const el = document.getElementById('app')

new Vue({
    metaInfo: {
        titleTemplate: (title) => (title ? `${title} | Creative Something` : 'Creative Something'),
    },
    render(h) {
        return h(require('@/Pages/Index.vue').default)
    },
}).$mount(el)

