import "./button.style.css"

export default function Button(props){
 const {buttonText, onClick} = props
 return(
  <button 
   className="button"
   onClick={onClick}
  >
   {buttonText}
  </button>
 )
}