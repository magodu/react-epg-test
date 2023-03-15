import classes from './Spinner.module.scss';

const Spinner = () => {
   
    return (
        <div className={classes.spinner} data-testid="loading">
            <div className={`spinner-border ${classes['spinner-color']}`} role="status"></div>
        </div>
    );
};

export default Spinner;
