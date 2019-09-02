import { mount } from '@vue/test-utils'
import KbnLoginForm from '@/components/molecules/KbnLoginForm.vue'

describe('KbnLoginForm', () => {
  describe('property', () => {
    let KbnLoginForm
    beforeEach(done => {
      loginForm = mount(KbnLoginForm, {
        propsData: { onlogin: () => {} }
      })
      loginForm.vm.$nextTick(done)
    })

  })
})