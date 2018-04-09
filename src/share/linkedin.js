import {h} from 'preact';
import LinkedinIcon from '../icons/linkedin';
import {iconStyle} from './utils';

const linkedin = ({text, url, summary, source, size, fill, background, circle}) => {
    return (
        <a
            href={'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURI(url) + '&title=' + encodeURI(text || '') + '&summary=' + encodeURI(summary || '') + '&source=' + encodeURI(source || '')}
            target='_blank'
            style={iconStyle(size, background || '#3B5998', circle)}
            aria-label="Share on Linkedin"
            title='Linkedin'>
            <LinkedinIcon size={size} fill={fill || '#fff'} />
        </a>
    );
};

export default linkedin;