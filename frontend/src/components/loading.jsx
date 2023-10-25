import Logo from '../assets/LoadingLogo.png'

import '../styles/loading.css'
import { Background } from './background'

export function Loading(){
  return(
    <div className='loading'>
      <img src={Logo} alt="" className='logo'/>
      <p>Loading</p>
      <Background />
    </div>
  )
}
