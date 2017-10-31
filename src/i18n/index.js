import zh from './zh-CN.json';
import en from './en-US.json';

// 
// const i18n = {
//     'zh-CN': { ...zh },
//     'en-US': { ...en }
// };

const i18n = {
    'zh-CN': Object.assign({}, zh),
    'en-US': Object.assign({}, en)
};

export default i18n;