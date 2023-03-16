
import Navbar from '../Navbar/Navbar';
import classes from './Footer.module.scss';

const Footer = () => {

    return (
        <footer>
            <div className={classes.wrapper}>
                <Navbar />
            </div>
        </footer>
    );
};

export default Footer;
