import React from 'react'
import Header from '../../components/Header'

const Login = () => {

  return (
    <div>       
         <Header/> 
        <form >

            <label htmlFor="">Nome:</label>
            <input 
            type="text"
            placeholder='Digite seu nome'                     
            />

            <br />

            <label htmlFor="">Senha:</label>
            <input 
            type="password"
            placeholder='Digite sua senha'                     
            />

            <br />
            
            <button type='submit'>Logar</button>
        </form>
    </div>
  )
}

export default Login