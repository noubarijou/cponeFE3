/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index.scss";

const Header = ({ name}) => {
	return (
		<header>
      <h1><a href="#">{name}</a></h1>
      <nav>
        <ul>
          <li><a href="#map">Colelction</a></li>
          <li><a href="#footer">Holler@Me</a></li>
        </ul>
      </nav>
    </header>
	);
};
export default Header;
