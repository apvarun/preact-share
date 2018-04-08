import {h} from 'preact';
import TwitterIcon from '../icons/twitter';
import {iconStyle} from './utils';

const twitter = ({text, url, size, fill, background, circle}) => {
    return (
        <a
            href={'https://twitter.com/share?url=' + encodeURI(url) + '&text=' + encodeURI(text)}
            target='_blank'
            style={iconStyle(size, background || '#1DA1F2', circle)}
            aria-label="Share on Facebook"
            title='Facebook'>
            <TwitterIcon size={size} fill={fill || '#fff'} />
        </a>
    );
};

export default twitter;