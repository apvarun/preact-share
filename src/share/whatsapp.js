import {h} from 'preact';
import WhatsAppIcon from '../icons/whatsapp';

const whatsapp = ({text, url, size, fill, background, circle}) => {
    let iconStyle = {
        padding: '10px',
        backgroundColor: background || '#25D366',
        width: (Number(size) + 20) + 'px' || '37px',
        height: (Number(size) + 20) + 'px' || '37px',
        borderRadius: circle ? '50%' : '0',
        marginRight: '4px'
    }
    return (
        <a
            href={'whatsapp://send?text='+encodeURI(text)+' '+encodeURI(url)}
            target='_blank'
            style={iconStyle}
            aria-label="Share on WhatsApp"
            title='WhatsApp'>
            <WhatsAppIcon size={size} fill={fill || '#fff'} />
        </a>
    );
};

export default whatsapp;