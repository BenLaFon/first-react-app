import logo from "../logo.svg"
import './header.css'

function Header() {
  return(
      <header>
        <nav>
          <div className="nav">
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>
  )
};

export default Header
