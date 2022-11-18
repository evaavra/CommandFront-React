import './Navbar.css'

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navcolor">
  <a className="navbar-brand" href="http://localhost:3000/">Commands project</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="http://localhost:3000/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/commands">Commands</a>
      </li>
    </ul>
  </div>
</nav>
    )
}