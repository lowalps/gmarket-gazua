<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        (-_-)
      </h1>
      <h2 class="subtitle">
        <input v-model="id">아이디</input>
        <input v-model="number1">숫자 범위 시작</input>
        <input v-model="number2">숫자 범위 끝</input>
      </h2>
      <div class="links">
        <div class="button--green" @click="btn">생성하기</div>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import axios from 'axios'

export default {
  components: {
    AppLogo
  },
  data () {
    return {
      valid: false,
      id: '',
      number1: '',
      number2: '',
    }
  },
  methods: {
      btn: function() {
          const client = axios.create({
//            baseURL: 'https://gmemberssl.gmarket.co.kr/Registration/JsonAddNewMember',
            headers: {'X-Custom-Header': 'foobar'}
          });
//          const payload = {
//            loginId: 'alpshigh17',
//            custNm: 'alpshigh17',
//            pwd: 'zcx132',
//            email: 'alpshigh17%40ruu.kr',
//            birthData: '20180123',
//            isrcvmail: 'Y',
//            gender: 'M',
//            nationCode: 'HK',
//            joinChannelType: '',
//            jaehu_id: '',
//          }
//          client.post('https://gmemberssl.gmarket.co.kr/Registration/JsonAddNewMember', payload)
//            .then((a) => console.log('hihi', a))
//            .catch(e => console.log("error", e))
      }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
