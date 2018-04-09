import {h} from 'preact';
import EmailIcon from '../icons/email';
import {iconStyle} from './utils';

const email = ({text, url, size, fill, background, circle}) => {
    return (
        <a
            href={'mailto:?&subject=Hey!Check out this URL&body=' + encodeURI(text || '') + ' ' + encodeURI(url)}
            target='_blank'
            style={iconStyle(size, background || '#fff', circle)}
            aria-label="Share via Email"
            title='Email'>
            <EmailIcon size={size} fill={fill || '#000'} />
        </a>
    );
};

export default email;