import Vue from 'vue'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  it('返回正确的文案', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
