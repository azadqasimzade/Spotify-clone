import { NavLink } from "react-router-dom"

const Title = ({title, more}) => {
  return (
        <NavLink to={more ?? '/'} className='hover:underline'>
            <h3 className="text-2xl text-white font-semibold tracking-tighter">{title}</h3>
        </NavLink>
  )
}

export default Title