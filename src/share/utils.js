export function iconStyle(size, background, circle){
    return {
        padding: '10px',
        backgroundColor: background || '#3B5998',
        width: size + 'px' || '37px',
        height: size + 'px' || '37px',
        borderRadius: circle ? '50%' : '0',
        marginRight: '4px',
        display: 'inline-block'
    };
}