import {h} from 'preact';
import WhatsAppIcon from '../icons/whatsapp';
import {iconStyle} from './utils';

const whatsapp = ({text, url, size, fill, background, circle}) => {
    return (
        <a
            href={'whatsapp://send?text='+encodeURI(text)+' '+encodeURI(url)}
            target='_blank'
            style={iconStyle(size, background || '#25D366', circle)}
            aria-label="Share on WhatsApp"
            title='WhatsApp'>
            <WhatsAppIcon size={size} fill={fill || '#fff'} />
        </a>
    );
};

export default whatsapp;