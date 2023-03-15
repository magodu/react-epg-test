import classes from './Error.module.scss';

const Error = () => {
   
    return (
        <div className={classes['error-container']}>
            <div className="alert alert-danger text-center" role="alert">
                <i className="bi bi-exclamation-triangle mr-1"></i>
                <span>An error has ocurred</span>
            </div>
        </div>
    );
};

export default Error;


