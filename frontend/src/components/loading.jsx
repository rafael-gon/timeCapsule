import Logo from '../assets/LoadingLogo.png'

import '../styles/loading.css'

export function Loading(){
  return(
    <div className='loading'>
      <img src={Logo} alt="" className='logo'/>
      <p>Loading</p>
    </div>
  )
}
