import '../styles/background.css';
import Regua from '../assets/Regua.png'
import Luz from '../assets/luz.png'

export function Background() {
  return (
    <div className="background">
      <img src={Regua} alt="" className='regua' draggable={false}/>
      <img src={Luz} alt="" className='luz' draggable={false}/>
    </div>
  )
}
