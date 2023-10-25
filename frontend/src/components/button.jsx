import '../styles/button.css'

export function Button(props){
  const text = props.children
  const href = props.href
  let purple = 'true'

  if (props.purple == "false"){
    purple = 'false'
  }

  if (text.length > 1){
    return(
      <button onClick={props.onClick} className='buttonLarge'>{text}</button>
    )
  } else {
    return (
      <a href={href} className={`buttonSmall ${(purple == 'true') ? 'purple' : null}`}>{text}</a>
    )
  }
}
