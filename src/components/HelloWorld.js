import Wrapper from './Wrapper';

export default ({ props }) => {
  function createStrComp(msg) {
    const re = /<a\b[^>]*>(.*?)<\/a>/gi;
    const rePun = /[!?.,:;]/gi;
    const links = [];
    const pattern = '<replace>';
    let matchIdx = 0;
    const s1 = msg.replace(rePun, (match) => ' ' + match);
    const s2 = s1.replace(re, (_, p1) => {
      // account for each link
      links.push(p1);
      // add the pattern to the string
      return pattern;
    });
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
      all.push(item);
      return all;
    }, []);
  }
  return <div>{createStrComp(props.msg)}</div>;
};
