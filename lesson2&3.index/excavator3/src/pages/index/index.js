import 'normalize.css'
import './index.scss'
import {
  fetch,
  rap
} from 'js/fetch.js'
let url = {
  list: '/merchandiseHot/list.do',
  slideList: '/slide/listSlides.do'
}
url = rap(url)
import slide from 'components/slide/slide.vue'
import top from 'components/top/top.vue'
import foot from 'components/foot/foot.vue'
import search from 'components/search/search.vue'
new Vue({
  el: '#body',
  data: {
    excavatorList: '',
    partsList: '',
    slideList: ''
  },
  created() {
    this.getList()
    this.getList(3)
    this.getSlideList()
  },
  methods: {
    getList(type = undefined) {
      fetch(url.list, {
        businessType: type
      }).then(res => {
        if (type) {
          this.partsList = res.data.merchandiseHotVOList
        } else {
          this.excavatorList = res.data.merchandiseHotVOList
        }
      })
    },
    getSlideList() {
      fetch(url.slideList).then(res => {
        this.slideList = res.data.slideList
        this.$nextTick(() => { // 队列更新 dom渲染完毕
        })
      })
    },
    reduceNum(list) {
      if (list.num <= 1) {
        return
      }
      list.num -= 1
    },
    addNum(list) {
      list.num += 1
    }
  },
  components: {
    slide,
    top,
    foot,
    search
  }
})
