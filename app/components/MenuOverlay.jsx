import NavLink from "./NavLink";

const MenuOverlay = ({Navlinks}) => {
  return (
    <nav className="flex flex-col py-4 items-center">
   { Navlinks.map((link,index)=>

   <li key={index}><NavLink href={link.path} title={link.title} /></li>
   )}
    </nav>
  )
};

export default MenuOverlay
