import {h} from 'preact';
import TwitterIcon from '../icons/twitter';

const twitter = ({text, url, size, fill, background, circle}) => {
    let iconStyle = {
        padding: '10px',
        backgroundColor: background || '#1DA1F2',
        width: (Number(size) + 20) + 'px' || '37px',
        height: (Number(size) + 20) + 'px' || '37px',
        borderRadius: circle ? '50%' : '0',
        marginRight: '4px'
    }
    return (
        <a
            href={'https://twitter.com/share?url=' + encodeURI(url) + '&text=' + encodeURI(text)}
            target='_blank'
            style={iconStyle}
            aria-label="Share on Facebook"
            title='Facebook'>
            <TwitterIcon size={size} fill={fill || '#fff'} />
        </a>
    );
};

export default twitter;