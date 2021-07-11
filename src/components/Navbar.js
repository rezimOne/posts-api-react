import './Navbar.css';

function Navbar(){


  return (
    <div className="navbar">
     <nav>
      <ul className="pagination">
        <li className="page-item disabled"><a className="page-link" href="#">&laquo;</a></li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item active"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
      </ul>
    </nav>
  </div>
  );

}

export default Navbar;