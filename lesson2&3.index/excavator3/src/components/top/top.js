import './top.scss'
import { fetch, rap } from 'js/fetch.js'
let url = {
  info: 'http://rap.taobao.org/mockjsdata/15950/user/getUser.do',
  logout: 'http://rap.taobao.org/mockjsdata/15950/user/logout.do'
}
// url = rap(url)
export default {
    data() {
      return {
        mobile: '',
        isLogin: false
      }
    },
    created() {
      // 获取用户信息
      this.getInfo()
    },
    methods: {
      getInfo() {
        fetch(url.info).then(res => {
          this.mobile = res.data.user.mobile
          this.isLogin = true
        })
      },
      logout() {
        fetch(url.logout).then(res => {
          this.isLogin = false
          this.mobile = ''
        })
      }
    }
  }
