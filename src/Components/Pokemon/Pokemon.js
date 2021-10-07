import './Pokemon.css'

const Pokemon = (props) => {
   return (
      <div className={"pokemon"}>{props.children}</div>
   )
}

export default Pokemon;