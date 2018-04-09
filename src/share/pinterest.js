import {h} from 'preact';
import PinterestIcon from '../icons/pinterest';
import {iconStyle} from './utils';

const pinterest = ({text, url, size, fill, background, circle}) => {
    return (
        <a
            href={'http://pinterest.com/pin/create/link/?url=' + encodeURI(url) + '&description=' + encodeURI(text)}
            target='_blank'
            style={iconStyle(size, background || '#BD081C', circle)}
            aria-label="Share on Pinterest"
            title='Pinterest'>
            <PinterestIcon size={size} fill={fill || '#fff'} />
        </a>
    );
};

export default pinterest;