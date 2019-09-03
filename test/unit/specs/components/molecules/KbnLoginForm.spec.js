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

    describe('email', () => {
      describe('required', () => {
        describe('Nothing is entered', () => {
          it('validation.email.required is invalid', () => {
            loginForm.setData({ email: ''})
            expect(loginForm.vm.validation.email.required).to.equal(false)
          })
        })

        describe('Something is entered', () => {
          it('validation.email.required is valid', () => {
            loginForm.setData({ email: 'foo@domain.com'})
            expect(loginForm.vm.validation.email.required).to.equal(true)
          })
        })
      })

      describe('fromat', () => {
        describe('invalid email address format', () => {
          it('validation.email.format is invalid', () => {
            loginForm.setData({ email: 'foobar' })
            expect(loginForm.vm.validation.email.format).to.equal(false)
          })
        })

        describe('valid email address format', () => {
          it('validation.email.format is valid', () => {
            loginForm.setData({ email: 'foo@domain.com' })
            expect(loginForm.vm.validation.email.format).to.equal(true)
          })
        })
      })
    })

    describe('password', () => {
      describe('required', () => {
        describe('Nothing is entered', () => {
          it('validation.password.required is invalid', () => {
            loginForm.setData({ password: '' })
            expect(loginForm.vm.validation.password.required).to.equal(false)
          })
        })

        describe('Something is entered', () => {
          it('validation.password.required is valid', () => {
            loginForm.setData({ password: 'xxxx' })
            expect(loginForm.vm.validation.password.required).to.equal(true)
          })
        })
      })
    })
  })

})