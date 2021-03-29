import Login from './Login'
import SignUp from './SignUp'
import Content from './Content'

const urls = [
  {path: '/login/', component: Login},
  {path: '/signup/', component: SignUp},
  {path: '/', component: Content},
]

export {urls};
