import { mount } from '@vue/test-utils'
import KbnButton from '@/components/atoms/KbnButton'

describe('KbnButton', () => {
  describe('property', () => {
    describe('type', () => {
      describe('default', () => {
        it('consists with the elements whicch have kbn-button class', () => {
          const button = mount(KbnButton)
          expect(button.is('button').to.equal(true))
          expect(button.classes()).to.include('kbn-button')
        })
      })

      describe('button', () => {
        it('consists with the elements whicch have kbn-button class', () => {
          const button = mount(KbnButton, {
            propsData: { type: 'button' }
          })
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button')
        })
      })

      describe('text', () => {
        it('consists with the elements whicch have kbn-button-text class', () => { 
          const button = mount(KbnButton, {
            propsData: { type: 'text' }
          })
          expect(button.is('button')).to.equal(true)
          expect(button.classes()).to.include('kbn-button-text')
        })
      })

      describe('disabled', () => {
        describe('default', () => {
          it('does not have disabled attribute', () => {
            const button = mount(KbnButton)
            expect(button.attributes().disabled).to.be.an('undefined')
          })
        })
        describe('true', () => {
          it('has disabled attribute', () => {
            const button = mount(KbnButton, {
              propsData: { disabled: true }
            })
            expect(button.attributes().disabled).to.equal('disabled')
          })
        })
        describe('false', () => {
          it('does not have disabled attribute', () => {
            const button = mount(KbnButton)
            expect(button.attributes().disabled).to.equal('undefined')
          })
        })
      })
    })

    describe('event', () => {
      describe('click', () => {
        it('is emitted', () => {
          const button = mount(KbnButton)
          button.trigger('click')
          expect(button.emitted().click.length).to.equal(1)
        })
      })
    })

    describe('slot', () => {
      describe('has contents insertion', () => {
        it('is inserted', () => {
          const button = mount(KbnButton, {
            slots: { default: '<p>hello</p>' }
          })
          expect(button.text()).to.equal('hello')
        })
      })
      describe('does not have contents insertion', () => {
        it('is not inserted', () => {
          const button = mount(KbnButton)
          expect(button.text()).to.equal('')
        })
      })
    })
  })
})