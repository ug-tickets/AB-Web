import xss from 'xss';
export const cleanMarkup = (markup) => ({
    __html: xss(markup),
});