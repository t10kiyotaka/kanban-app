import KbnBoardView from '@/components/template/KbnBoardView.vue'
import KbnLoginView from '@/components/template/KbnLoginView.vue'
import KbnTaskDetailModal from '@/components/template/KbnTaskDetailModal.vue'

export default [{
  path: '/',
  component: KbnBoardView,
  meta: { requiresAuth: true }
}, {
  path: '/login',
  component: KbnLoginView
}, {
  path: '/tasks/:id',
  component: KbnTaskDetailModal,
  meta: { requiresAuth: true }
}, {
  path: '*',
  redirect: '/'
}]