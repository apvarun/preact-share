import {h} from 'preact';
import RedditIcon from '../icons/reddit';

const reddit = ({url, size, fill, background, circle}) => {
    let iconStyle = {
        padding: '10px',
        backgroundColor: background || '#FF4500',
        width: (Number(size) + 20) + 'px' || '37px',
        height: (Number(size) + 20) + 'px' || '37px',
        borderRadius: circle ? '50%' : '0',
        marginRight: '4px'
    }
    return (
        <a
            href={'https://reddit.com/submit/?url=' + encodeURI(url)}
            target='_blank'
            style={iconStyle}
            aria-label="Share on Reddit"
            title='Reddit'>
            <RedditIcon size={size} fill={fill || '#fff'} />
        </a>
    );
};

export default reddit;