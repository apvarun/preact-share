import {h} from 'preact';
import FacebookIcon from '../icons/facebook';

const facebook = ({url, size, fill, background, circle}) => {
    let iconStyle = {
        padding: '10px',
        backgroundColor: background || '#3B5998',
        width: (Number(size) + 20) + 'px' || '37px',
        height: (Number(size) + 20) + 'px' || '37px',
        borderRadius: circle ? '50%' : '0',
        marginRight: '4px'
    }
    return (
        <a
            href={'https://facebook.com/sharer/sharer.php?u=' + encodeURI(url)}
            target='_blank'
            style={iconStyle}
            aria-label="Share on Facebook"
            title='Facebook'>
            <FacebookIcon size={size} fill={fill || '#fff'} />
        </a>
    );
};

export default facebook;