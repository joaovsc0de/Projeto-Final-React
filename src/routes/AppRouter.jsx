import { Routes, Route } from 'react-router-dom'
import Error from '../pages/Error'
import Home from '../pages/Home'
import Login from '../pages/Login'
import More from '../pages/More'
import Loja from '../pages/Loja'
import Posts from '../pages/Posts'
import Cadastro from '../pages/Cadastro'

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home/>}></Route>
      <Route path={'/cadastro'} element={<Cadastro/>}></Route>
      <Route path={'/login'} element={<Login/>}></Route>
      <Route path={'/loja'} element={<Loja/>}></Route> 
      <Route path={'/posts'} element={<Posts/>}></Route>
      <Route path={'/update'}></Route>
      <Route path={'/pedido'}></Route>
      <Route path={'/more'} element={<More/>}></Route>
      <Route path={'*'} element={<Error/>}></Route>
    </Routes>
  )
}

export default AppRouter