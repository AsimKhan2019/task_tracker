import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => { //this is what we call destructuring 
  const location = useLocation()
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} 
      text={showAdd ? 'Close' : 'Add'} 
      onClick={onAdd} />}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

/*
<h1 style={headingStyle}>{title}</h1> -- if you want to use the inline styling 
const headingStyle = {
  color: 'red',
  backgroundColor: 'black',
}
*/

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header