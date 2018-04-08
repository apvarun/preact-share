import {h} from 'preact';
import RedditIcon from '../icons/reddit';
import {iconStyle} from './utils';

const reddit = ({url, size, fill, background, circle}) => {
    return (
        <a
            href={'https://reddit.com/submit/?url=' + encodeURI(url)}
            target='_blank'
            style={iconStyle(size, background || '#FF4500', circle)}
            aria-label="Share on Reddit"
            title='Reddit'>
            <RedditIcon size={size} fill={fill || '#fff'} />
        </a>
    );
};

export default reddit;