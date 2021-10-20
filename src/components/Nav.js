/** @jsx dom */
import dom from '../../lib/dom'

const navBar = {
  width: "100vw",
  height: "10vh",
  boxShadow: "0 4px 8px -2px gray"
}

const navBarContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
}

const navItems = {
  listStyleType: "none",
  display: "flex"
}

const navItem = {
  padding: ".5rem .75rem",
  border: "1px solid transparent",
  cursor: "pointer"
}

const handleNavBorderShow = (e) => {
  e.type === 'mouseover' ?
    e.target.style.border = "1px solid gray" :
    e.target.style.borderColor = "transparent"
}

const handleNavSelection = (e) => {
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item == e.target) {
      e.target.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })

}



const Nav = (
  <nav sx={navBar} id="nav-bar">
    <div className="container" sx={navBarContainer}>
      <h1 id="brand-logo">Logo</h1>
      <ul sx={navItems}>
        {[
          { name: 'Home', link: "/" },
          { name: 'About', link: "/about" },
          { name: 'Contact', link: "/contact" }].map(item => (
            <a>
              <li
                className="nav-item"
                sx={navItem}
                onClick={handleNavSelection}
                onMouseOver={handleNavBorderShow}
                onMouseLeave={handleNavBorderShow}
              >{item.name}</li>
            </a>
          ))}
      </ul>
    </div >
  </nav>
)

export default Nav