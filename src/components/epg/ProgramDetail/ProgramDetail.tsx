import React from 'react';

import Modal from '../../UI/Modal/Modal';

import classes from './ProgramDetail.module.scss';
import { programEpg } from '../../../models/appTypes';
import { getFormattedTime } from '../../../utils';

import sampleShow from '../../../assets/images/sample-show.jpg';


const ProgramDetail: React.FC<{ data: programEpg, onClose: () => void }> = ({ data, onClose }) => {
    return (
        <Modal onClose={onClose}>
            <section className={classes.modal}>
                <header className={classes.header}>
                    {data.title}
                </header>
                <button type="button" aria-label="Close Modal" className={classes['close-modal-icon']} onClick={onClose}>
                    <i className="bi bi-x-circle" title="Close modal"></i>
                </button>
                <div className={classes.content}>
                    <img src={sampleShow} alt={data.title} />
                    <div className={classes.schedule}><p>{`${getFormattedTime(data.start)} - ${getFormattedTime(data.end)}`}</p></div>
                    <p className={classes['description-title']}>Description</p>
                    <p className={classes.description}>Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet Lorem ipsum sit amet </p>
                </div> 
                <div className={classes.footer}></div>
            </section>
       </Modal>
    );
};

export default ProgramDetail;
