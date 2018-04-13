import {h} from 'preact';
import TelegramIcon from '../icons/telegram';
import {iconStyle} from './utils';

const telegram = ({text, url, size, fill, background, circle}) => {
    return (
        <a
            href={'https://t.me/share/url?url=' + encodeURI(url) + '&text=' + encodeURI(text) }
            target='_blank'
            style={iconStyle(size, background || '#2CA5E0', circle)}
            aria-label="Share on Telegram"
            title='Telegram'>
            <TelegramIcon size={size} fill={fill || '#fff'} />
        </a>
    );
};

export default telegram;