import Wrapper from './Wrapper';

export default ({ props }) => {
  function createStrComp(msg) {
    const re = /<a\b[^>]*>(.*?)<\/a>/gi;
    const links = [];
    const pattern = '<replace>';
    let matchIdx = 0;
    const newStr = msg.replace(re, (_, p1) => {
      links.push(p1);
      return pattern;
    });
    const arrStr = newStr.split(' ');
    const arrStrComp = arrStr.map((str) => {
      if (str === pattern) {
        return <Wrapper msg={links[matchIdx++]} />;
      }
      return str;
    });
    // add spaces
    return arrStrComp.reduce((all, item) => {
      all.push(item);
      all.push(' ');
      return all;
    }, []);
  }
  return <div>{createStrComp(props.msg)}</div>;
};
