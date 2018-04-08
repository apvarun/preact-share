import {h} from 'preact';
import FacebookIcon from '../icons/facebook';
import {iconStyle} from './utils';

const facebook = ({url, size, fill, background, circle}) => {
    return (
        <a
            href={'https://facebook.com/sharer/sharer.php?u=' + encodeURI(url)}
            target='_blank'
            style={iconStyle(size, background || '#3B5998', circle)}
            aria-label="Share on Facebook"
            title='Facebook'>
            <FacebookIcon size={size} fill={fill || '#fff'} />
        </a>
    );
};

export default facebook;