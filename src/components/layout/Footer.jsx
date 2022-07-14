import classes from './Footer.module.css';

function Footer() {
  const getCurrentYear = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      &copy;{getCurrentYear} Designed & Developed by Jose Torralba
    </div>
  );
}

export default Footer;
