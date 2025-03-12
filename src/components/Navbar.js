import React from 'react'

export default function Navbar(){
    return(
      <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="../images/fnp-gift.svg" alt="Bootstrap" width="100%" height="40"/>
        </a>
        <div className="dropdown">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
    Dropdown form
  </button>
  <form className="dropdown-menu p-4">
    <div className="mb-3">
      <label for="exampleDropdownFormEmail2" className="form-label">Select Country</label>
      <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="India"/>
    </div>
    <div className="mb-3">
      <label for="exampleDropdownFormPassword2" className="form-label">Enter Pincode</label>
      <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="110063"/>
    </div>

    <button type="submit" class="btn btn-primary">Continue Shopping</button>
  </form>
</div>
            <form className="d-flex" role="search">
                <input className="search form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "400px", borderRadius:"10px" }}/>
            </form>
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
             </button> */}
             <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Same Day</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">INR</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Corporate</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Cart</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Hi Guest</a>
  </li>
  <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
</ul>
  </div>
</nav>
    )
}