import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Oops!</h1>
      <p className={classes.text}>404 - Page Not Found!</p>
      <Link to='/' className={classes.link}>
        <FaHome className={classes.icon} />
        Back To Home
      </Link>
    </div>
  );
};

export default NotFound;
