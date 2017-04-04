import { pagination, card } from 'element-ui'
Vue.use(pagination)
Vue.use(card)

import { fetch, rap } from 'js/fetch.js'
let url = {
    list: 'http://rap.taobao.org/mockjsdata/15950/product/getLists.do'
}

new Vue({
    el: '#app',
    data: {
        currPage: 2,
        items: ''
    },
    created() {
        this.getLists()
    },
    // computed: {
    //     items() {
    //         let arr = []
    //         for(let i = 1; i < 5; i++) {
    //             arr.push(this.currPage * i)
    //         }
    //         return arr
    //     }
    // },
    methods: {
        change(page) {
            this.currPage = page
            this.getLists()
        },
        getLists() {
            fetch(url.list, {
                pageNumber: this.currPage
            }).then(res => {
                this.items = res.data.list
            })
        }
    }
})