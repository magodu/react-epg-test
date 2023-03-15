import classes from './Sidebar.module.scss';
import { epgData } from '../../../models/appTypes';

const Sidebar: React.FC<{ data: epgData[]}> = ({ data }) => {
    const POSITION_INCR = 80;

    return (
        <div data-testid="sidebar" className={classes.sidebar}>
            { data && data.map((channel: epgData, index: number) => (
                <div key={channel.id} className={classes['channel-box']} style={{ 'top': `${(index * POSITION_INCR)}px`}} >  
                    <img src={channel!.images!.logo} alt={channel.title} className={classes['channel-logo']} />
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
