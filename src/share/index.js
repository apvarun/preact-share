import {h} from 'preact';

import Facebook from './facebook';
import Twitter from './twitter';
import WhatsApp from './whatsapp';
import Reddit from './reddit';

const SocialIcons = ({text, url, size}) => {
    return (
        <div style={{
            display: 'flex',
            padding: '10px 0'
        }}>
            <Facebook url={url} size={size || 20} fill='#fff' background='#3B5998' circle/>
            <Twitter
                text={text}
                url={url}
                size={size || 20}
                fill='#fff'
                background='#1DA1F2'
                circle/>
            <WhatsApp
                text={text}
                url={url}
                size={size || 20}
                fill='#fff'
                background='#25D366'
                circle/>
            <Reddit url={url} size={size || 20} fill='#fff' background='#FF4500' circle/>
        </div>
    );
};

export default SocialIcons;