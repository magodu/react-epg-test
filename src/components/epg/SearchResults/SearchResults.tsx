import Modal from '../../UI/Modal/Modal';

import { programEpg, epgFilteredData } from '../../../models/appTypes';
import { getFormattedTime, getFormattedDate } from '../../../utils';

import classes from './SearchResults.module.scss';

const SearchResults: React.FC<{ data: any; onClose: () => void }> = ({ data, onClose }) => {

    return (
        <Modal onClose={onClose}>
            <section className={classes.modal}>
                <header className={classes.header}>Search</header>
                <button type="button" aria-label="Close Modal" className={classes['close-modal-icon']} onClick={onClose}>
                    <i className="bi bi-x-circle" title="Close modal"></i>
                </button>
                <div className={classes.content}>
                    <div className={classes['results-wrapper']}>
                        { data && data.map((channel: epgFilteredData) =>
                            <div key={channel.channelId}>
                                <div className={classes.channel}>
                                    <img src={channel.image} alt="Logo" />
                                    <span>{channel.channel}</span>
                                </div>
                                <div className={classes.results}>
                                    { channel.results.map((item: programEpg) =>
                                        <div key={item.id} className="row">
                                            <div className="col-md-5 col-sm-6">
                                                <p>{item.title}</p>
                                            </div>
                                            <div className={`col-md-7 col-sm-6 ${classes['time-wrapper']}`}>
                                                <div className={`row ${classes.time}`}>
                                                    <div className="col-md-6 col-sm-12">
                                                        <span>{getFormattedDate(item.start)}</span>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12">
                                                        <span>{`${getFormattedTime(item.start)} - ${getFormattedTime(item.end)}`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    )}
                                </div>
                            </div> 
                        )}
                    </div>
                </div>
                <div className={classes.footer}></div>
            </section>
        </Modal>
    );
};

export default SearchResults;
