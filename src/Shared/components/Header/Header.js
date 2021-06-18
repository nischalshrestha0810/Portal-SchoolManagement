import logo from '../../img/logo.png'

const Header = ({ isLoggedin }) => {
  const header = isLoggedin === true ?
    <div className='header test' style={{
      paddingLeft: '80px',
      boxshadow: '2px 3px 4px -1px #c4c4c4',
      background: '#f9f9f9',
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '3px solid #d1d1d1'
    }}>
      <div className="left_part-header">
        <img src={logo} height="50px" width="50px" />
        <h5>Seven Series IT Solution Pvt. Ltd.</h5>
      </div>

      <div className="right_part-header">
        <ul>
          <li>
            <a href="#">
              <i className="far fa-user"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i>
            </a>
          </li>
        </ul>
        <div className="contact_us">
          <p>Do you need Help?
        <span>Please contact us !</span>
          </p>
          <span className="contact-icons">
            <span>
              <a href="mailto:poozahh@gmail.com"><i className="far fa-envelope"></i></a>
            </span>
            <span>
              <a href="tel:9843560641"><i className="fas fa-phone"></i></a>
            </span>
          </span>
        </div>
      </div>

    </div>
    :
    <div className='header test' style={{
      paddingLeft: '80px',
      boxshadow: '2px 3px 4px -1px #c4c4c4',
      background: '#f9f9f9',
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '3px solid #d1d1d1'
    }}>
      <div className="left_part-header">
        <img src={logo} height="50px" width="50px" />
        <h5>Seven Series IT Solution Pvt. Ltd.</h5>
      </div>

      <div className="right_part-header">
        <div className="contact_us">
          <p>Do you need Help?
          <span>Please contact us !</span>
          </p>
          <span className="contact-icons">
            <span>
              <a href="mailto:poozahh@gmail.com"><i className="far fa-envelope"></i></a>
            </span>
            <span>
              <a href="tel:9843560641"><i className="fas fa-phone"></i></a>
            </span>
          </span>
        </div>
      </div>

    </div>
  return (
    header
  );
}

export default Header;