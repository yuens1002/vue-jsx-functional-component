import Wrapper from './Wrapper';

const re = /<a\b[^>]*>(.*?)<\/a>/gi;
const rePun = /[!?.,:;]/gi;
const links = [];
const pattern = '<replace>';
let matchIdx = 0;

const HelloWorld = ({ props }) => {
  function createStrComp(msg) {
    const s1 = msg.replace(re, (_, p1) => {
      // account for each link
      links.push(p1);
      // add the pattern to the string
      return pattern;
    });
    const s2 = s1.replace(rePun, (match) => ' ' + match);
    const arrStr = s2.split(' ');
    const arrStrComp = arrStr.map((str) => {
      // replace the pattern with the componenet
      if (str === pattern) {
        return <Wrapper msg={links[matchIdx++]} />;
      }
      return str;
    });
    return arrStrComp.reduce((all, item, i) => {
      // add a space before all non punctuated words
      if (typeof item === 'string' && item.search(rePun) !== 0) {
        all.push(' ');
      }
      // add a space before a link
      if (typeof item !== 'string' && i !== 0) all.push(' ');
      return all.push(item), all;
    }, []);
  }
  return <div>{createStrComp(props.msg)}</div>;
};

export default HelloWorld;
